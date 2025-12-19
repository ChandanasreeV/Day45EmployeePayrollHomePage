window.addEventListener("DOMContentLoaded", () => {
    createInnerHTML();
});

function createInnerHTML() {

    const empList = [
        {
            _name: "Bruce Wayne",
            _gender: "Male",
            _department: ["Finance", "HR"],
            _salary: "70000",
            _startDate: "12 Jan 2025",
            _profilePic: "assets/pic2.jpg"
        },
        {
            _name: "Diana Prince",
            _gender: "Female",
            _department: ["Sales"],
            _salary: "55000",
            _startDate: "25 Jan 2025",
            _profilePic: "assets/pic3.jpg"
        }
    ];

    let innerHTML = "";

    for (let emp of empList) {

        let deptHTML = "";
        emp._department.forEach(dept => {
            deptHTML += `<div class='dept-chip'>${dept}</div>`;
        });

        innerHTML += `
            <tr>
                <td><img class="table-profile" src="${emp._profilePic}"></td>
                <td>${emp._name}</td>
                <td>${emp._gender}</td>
                <td>${deptHTML}</td>
                <td>${emp._salary}</td>
                <td>${emp._startDate}</td>
                <td>
                    <button class="btn-small">Edit</button>
                    <button class="btn-small delete">Delete</button>
                </td>
            </tr>
        `;
    }

    document.querySelector("#table-display").innerHTML = innerHTML;
}

