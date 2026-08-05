function UserList() {
  const users = [
    {
      name: "Rahul Sharma",
      age: 24,
      city: "Hyderabad",
      email: "rahul@gmail.com",
      occupation: "Software Engineer",
    },
    {
      name: "Priya Reddy",
      age: 22,
      city: "Visakhapatnam",
      email: "priya@gmail.com",
      occupation: "UI Designer",
    },
    {
      name: "Arjun Kumar",
      age: 26,
      city: "Bengaluru",
      email: "arjun@gmail.com",
      occupation: "React Developer",
    },
    {
      name: "Sneha Patel",
      age: 23,
      city: "Pune",
      email: "sneha@gmail.com",
      occupation: "QA Engineer",
    },
    {
      name: "Vikram Singh",
      age: 27,
      city: "Chennai",
      email: "vikram@gmail.com",
      occupation: "Cloud Engineer",
    },
  ];

  return (
    <div className="users-section">
      <h2>User Details</h2>

      <div className="card-container">
        {users.map((user, index) => (
          <div className="user-card" key={index}>
            <h3>{user.name}</h3>
            <p><strong>Age:</strong> {user.age}</p>
            <p><strong>City:</strong> {user.city}</p>
            <p><strong>Email:</strong> {user.email}</p>
            <p><strong>Occupation:</strong> {user.occupation}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default UserList;