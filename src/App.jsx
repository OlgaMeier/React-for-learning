import "./App.css";
import ProfileCard from "./components/Button/ProfileCard";

// 1. Компоненты пишутся с заглавной буквы
// 2. Компоненты должны возвращать JSX(DOM элементы - HTML теги)
function App() {
 
// данные профиля в карточке
  const profileDataOne = {
    name: "Lion Rug",
    type_of_Activity: "Astronaut",
    hair_Color: "Red",
    height_of_Person: 180,
    src: "./IMG/Lion_Rug.jpg",
    isWild: true
  };
  const profileDataSecond = {
    name: "Arian Wivat",
    type_of_Activity: "Astronaut",
    hair_Color: "Brown",
    height_of_Person: 175,
    src: "./IMG/Arian__Wivat.jpg",
    isWild: true
  };
  const profileDataThird = {
    name: "Lilo Lilian",
    type_of_Activity: "Astronaut",
    hair_Color: "Light brown",
    height_of_Person: 168,
    src: "./IMG/Lilo_Lilian.jpg",
    isWild: true
  };

  
  //возвращаем JSX компоненты Арр
  return (
    <div className="App">
      <p>React app lesson 17</p>
      <div className="ProfileCard-container">   
      <ProfileCard profileData={profileDataOne} />
      <ProfileCard profileData={profileDataSecond} />
      <ProfileCard profileData={profileDataThird} />  

      </div>
      </div>
/*
      <div className="Austronauts">
        <h3>Austronaut Lion Rug</h3>
        <img src={profileDataOne.src} alt="Lion Rug image" />
        <p>name: {profileDataOne.name}</p>
        <p>type_of_Activity: {profileDataOne.type_of_Activity}</p>
        <p>hair_Color: {profileDataOne.hair_Color}</p>
        <p>height_of_Person: {profileDataOne.height_of_Person}</p>
      
        <h3>Austronaut Arian Wivat</h3>
        <img src={profileDataSecond.src} alt="Arian Wivat image" />
        <p>name: {profileDataSecond.name}</p>
        <p>type_of_Activity: {profileDataSecond.type_of_Activity}</p>
        <p>hair_Color: {profileDataSecond.hair_Color}</p>
        <p>height_of_Person: {profileDataSecond.height_of_Person}</p>

        <h3>Austronaut Lilo Lilian</h3>
        <img src={profileDataThird.src} alt="Lilo Lilian image" />
        <p>name: {profileDataThird.name}</p>
        <p>type_of_Activity: {profileDataThird.type_of_Activity}</p>
        <p>hair_Color: {profileDataThird.hair_Color}</p>
        <p>height_of_Person: {profileDataThird.height_of_Person}</p>
      
        </div>

      <div>
        <ProfileCardComponent />        
      </div>
    </div>*/
  );
}

export default App;