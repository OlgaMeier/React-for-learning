function ProfileCard({profileData}) {
    return(
      <div className="ProfileCard">
        <h3>{profileData.name}</h3>
         <img src={profileData.src} alt="Image of Austronaut"/>
         <p>type_of_Activity:{profileData.type_of_Activity}</p>
        <p>hair_Color:{profileData.hair_Color}</p>
        <p>height_of_Person:{profileData.height_of_Person}</p>

      </div>

    );
  }
  export default ProfileCard;
