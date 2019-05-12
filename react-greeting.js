
function UserGreeting(props) {
   return <h1>欢迎回来!</h1>;
}

function GuestGreeting(props) {
   return <h1>请先注册。</h1>;
}

function Greeting(props) {
   const isLoggedIn = props.isLoggedIn;

   if (isLoggedIn) {
      return <UserGreeting />;
   }

   return <GuestGreeting />;
}
