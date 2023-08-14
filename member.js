function skillsMember() {
    var member = {
        name: "John Doe",
        age: 25,
        skills: ["js", "html", "css"],
        salary: 25000,
        address: {
            city: "Bangalore",
            state: "Karnataka",
            pincode: 560001
        },
        getName: function () {
            return this.name;
        },
        getAge: function () {
            return this.age;
        },
        getSkills: function () {
            return this.skills;
        },
        getSalary: function () {
            return this.salary;
        },
        getAddress: function () {
            return this.address;
        }
    };
    console.log(member.getName());
    console.log(member.getAge());
    console.log(member.getSkills());
    console.log(member.getSalary());
    console.log(member.getAddress());
}