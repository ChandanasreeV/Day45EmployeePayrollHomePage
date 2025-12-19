window.addEventListener("DOMContentLoaded", () => {
    createInnerHTML();
});

function createInnerHTML() {
    const headerHtml = `
        <tr>
            <th>Profile</th>
            <th>Name</th>
            <th>Gender</th>
            <th>Department</th>
            <th>Salary</th>
            <th>Start Date</th>
            <th>Actions</th>
        </tr>
    `;

    const row = `
        <tr>
            <td><img class="table-profile" src="assets/pic1.jpg"></td>
            <td>Mark Henry</td>
            <td>Male</td>
            <td><div class="dept-chip">HR</div></td>
            <td>45000</td>
            <td>04 Jan 2025</td>
            <td>
                <button class="btn-small">Edit</button>
                <button class="btn-small delete">Delete</button>
            </td>
        </tr>
    `;

    document.querySelector("#table-display").innerHTML = row;
}
