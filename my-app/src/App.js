
import Card from './card';
import './App.css';
import saja from './saja.jpg'
import dana from './dana.jpg'
import tima from './tima.jpg'
import Hala from './hala.jpg'
import waad from './waad.jpg'

function App() {
  
  return (
    <div className="App">
     <Card name={'saja dahamsheh'} about={'electrical enginer'} tlink={"https://www.linkedin.com/in/saja-dahamsheh/"} flink={"https://www.facebook.com/saja.dahamsheh"} ilink={"https://www.facebook.com/saja.dahamsheh"}  img={saja}/>
     
     <Card name={'Hala A. Al-Hyasat'} about={'comunication enginer'} tlink={"https://www.linkedin.com/in/hala-alhyasat/"} flink={"https://www.facebook.com/HalaA.AlHyasat"} ilink={"https://www.facebook.com/saja.dahamsheh"}  img={Hala}/>

     <Card name={'Waed Dawaghreh'} about={'computer since'} tlink={"https://www.linkedin.com/in/waed-dawaghreh98/"} flink={"https://www.facebook.com/profile.php?id=100004017838089"} ilink={"https://www.facebook.com/saja.dahamsheh"}  img={waad}/>

     
     <Card name={'Taima Alfokaha'} about={'Electronics Engineering'} tlink={"https://www.linkedin.com/in/taima%E2%80%99-al-fokaha%E2%80%99/"} flink={"https://www.facebook.com/taima.alfokaha"} ilink={"https://www.facebook.com/saja.dahamsheh"}  img={tima}/>

     <Card name={'Dana Toughoj'} about={'CIS'} tlink={"https://www.linkedin.com/in/dana-toughoj/"} flink={"https://www.facebook.com/toughoj"} ilink={"https://www.facebook.com/saja.dahamsheh"}  img={dana}/>

     
     
    </div>
  );
}

export default App;
