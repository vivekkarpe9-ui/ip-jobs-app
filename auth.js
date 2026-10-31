(() => {
const client = window.supabase.createClient(window.IPJOBS_SUPABASE_URL, window.IPJOBS_SUPABASE_KEY);
window.iPJobsSupabase = client;
const $ = id => document.getElementById(id);
const dialog = $("authDialog"), form = $("authForm");
let mode = "signin", session = null;
function note(s){ $("authNotice").textContent=s; }
function modeSet(m){
 mode=m; const signed=!!session;
 $("signupFields").classList.toggle("hidden",m!=="signup"||signed);
 form.elements.full_name.required=m==="signup"&&!signed;
 form.elements.date_of_birth.required=m==="signup"&&!signed;
 form.elements.role.required=m==="signup"&&!signed;
 form.elements.email.disabled=signed; form.elements.password.disabled=signed;
 $("authTitle").textContent=signed?"Your account":m==="signup"?"Create account":"Welcome back";
 $("authSubtitle").textContent=signed?(session.user.email||"Signed in"):"Use your email and password.";
 $("authSubmit").classList.toggle("hidden",signed);
 $("authSwitch").classList.toggle("hidden",signed);
 $("signOutBtn").classList.toggle("hidden",!signed);
 note(signed?"You are signed in.":"Accounts are for adults aged 18+ only.");
}
$("accountBtn").addEventListener("click",async()=>{const r=await client.auth.getSession();session=r.data.session;form.reset();modeSet("signin");dialog.showModal();});
$("closeAuth").addEventListener("click",()=>dialog.close());
$("authSwitch").addEventListener("click",()=>modeSet(mode==="signup"?"signin":"signup"));
form.addEventListener("submit",async e=>{
 e.preventDefault(); if(session)return;
 const d=new FormData(form), email=String(d.get("email")).trim(), password=String(d.get("password"));
 const btn=$("authSubmit"); btn.disabled=true; btn.textContent="Please wait…";
 try{
  if(mode==="signup"){
   const dob=String(d.get("date_of_birth")||""), cutoff=new Date(); cutoff.setFullYear(cutoff.getFullYear()-18);
   if(!dob||new Date(dob+"T00:00:00")>cutoff)throw new Error("iP Jobs accounts are for people aged 18 or older only.");
   const {data,error}=await client.auth.signUp({email,password,options:{data:{full_name:String(d.get("full_name")).trim(),date_of_birth:dob,role:String(d.get("role")),phone:String(d.get("phone")||"").trim()}}});
   if(error)throw error;
   if(data.session){notify("Account created and signed in.");dialog.close();}
   else{note("Account created. Check your email verification link, then sign in.");modeSet("signin");}
  }else{
   const {error}=await client.auth.signInWithPassword({email,password}); if(error)throw error;
   notify("Signed in successfully.");dialog.close();
  }
 }catch(err){note(err.message||"Please try again.");}
 finally{btn.disabled=false;btn.textContent=mode==="signup"?"Create account ↗":"Sign in ↗";}
});
$("signOutBtn").addEventListener("click",async()=>{const {error}=await client.auth.signOut();if(error)note(error.message);else{session=null;form.reset();modeSet("signin");dialog.close();notify("Signed out.");}});
client.auth.onAuthStateChange((_event,s)=>{session=s;$("accountBtn").textContent=s?.user?.email?.slice(0,1)?.toUpperCase()||"?";$("accountBtn").title=s?.user?.email||"Sign in";});
})();