year_input = prompt("შეიყვანე წელი: ")
leap_year = year_input % 4
if (leap_year == 0) {
    alert("ეს წელი ნაკიანია")
} else {
    alert("ეს წელი არარის ნაკიანი")
}