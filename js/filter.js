function search() {
	let input, filter, table, tr, td, i, text;
	input = document.getElementById("search-box");
	filter = input.value.toUpperCase();
	table = document.getElementById("students");
	tr = table.getElementsByTagName("tr");
	for (i = 0; i < tr.length; i++) {
		td = tr[i].getElementsByTagName("td")[0];
		if (td) {
			text = td.textContent || td.innerText;
			if (text.toUpperCase().indexOf(filter) > -1) {
				tr[i].style.display = "";
			} else {
				tr[i].style.display = "none";
			}
		}
	}
}
