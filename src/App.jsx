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
    src: "https://www.google.com/imgres?imgurl=https%3A%2F%2Fst.depositphotos.com%2F1035224%2F4185%2Fi%2F450%2Fdepositphotos_41857239-stock-photo-group-of-astronauts.jpg&tbnid=zvHq4r2GuKEgNM&vet=12ahUKEwjSpYTssa6EAxVIoP0HHX7JATwQMygVegUIARCFAQ..i&imgrefurl=https%3A%2F%2Fdepositphotos.com%2Feditorial%2Fgroup-of-astronauts-41857239.html&docid=TFCoci49D0_EUM&w=600&h=449&q=%D0%BA%D0%B0%D1%80%D1%82%D0%B8%D0%BD%D0%BA%D0%B8%20jpg%20astronauts&ved=2ahUKEwjSpYTssa6EAxVIoP0HHX7JATwQMygVegUIARCFAQ.jpg",
    isWild: true
  };
  const profileDataSecond = {
    name: "Arian Wivat",
    type_of_Activity: "Astronaut",
    hair_Color: "Brown",
    height_of_Person: 175,
    src: "https://276709.selcdn.ru/proektoria/professions/2020/04/29/c22abfa379f38b5b0411bc11fa9bf92f/2020-04-29_12-33-02.jpg",
    isWild: true
  };
  const profileDataThird = {
    name: "Lilo Lilian",
    type_of_Activity: "Astronaut",
    hair_Color: "Light brown",
    height_of_Person: 168,
    src: "https://avatars.dzeninfra.ru/get-zen_doc/209388/pub_650cfb7e21620872d3983854_650d0684edecc713f37d6aa1/scale_1200",
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