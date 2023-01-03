let name_bs = "";
let nameC_bs = "";
let team_bs = "";
let lineup_bs = "";
setInterval(() => {
	name_bs = document.getElementById("getname").value, team_bs = document.getElementById("team").value, lineup_bs = document.getElementById("lineup").value, nameC_bs = document.getElementById("capitan").value;
  if (name_bs == "null" || name_bs == null || name_bs == "" || name_bs == " " || name_bs == "  " || name_bs == "   " || name_bs == "    " || name_bs == "     " || name_bs == "      " || name_bs == "       " || name_bs == "        " || name_bs == "         " || name_bs == "          " || name_bs == "           " || name_bs == "            " || name_bs == "             " || name_bs == "              ") {
		return document.getElementById("btn_ok").style = "background: #7f7f7f;",
    document.querySelector(".redblock").style.display = "block";
  }
  else if (team_bs == "null" || team_bs == null || team_bs == "" || team_bs == " " || team_bs == "  " || team_bs == "   " || team_bs == "    " || team_bs == "     " || team_bs == "      " || team_bs == "       " || team_bs == "        " || team_bs == "         " || team_bs == "          " || team_bs == "           " || team_bs == "            " || team_bs == "             " || team_bs == "              ") {
		return document.getElementById("btn_ok").style = "background: #7f7f7f;",
    document.querySelector(".redblock").style.display = "block";
  }
  else if (lineup_bs == "null" || lineup_bs == null || lineup_bs == "" || lineup_bs == " " || lineup_bs == "  " || lineup_bs == "   " || lineup_bs == "    " || lineup_bs == "     " || lineup_bs == "      " || lineup_bs == "       " || lineup_bs == "        " || lineup_bs == "         " || lineup_bs == "          " || lineup_bs == "           " || lineup_bs == "            " || lineup_bs == "             " || lineup_bs == "              ") {
		return document.getElementById("btn_ok").style = "background: #7f7f7f;",
    document.querySelector(".redblock").style.display = "block";
  }
  else if (nameC_bs == "null" || nameC_bs == null || nameC_bs == "" || nameC_bs == " " || nameC_bs == "  " || nameC_bs == "   " || nameC_bs == "    " || nameC_bs == "     " || nameC_bs == "      " || nameC_bs == "       " || nameC_bs == "        " || nameC_bs == "         " || nameC_bs == "          " || nameC_bs == "           " || nameC_bs == "            " || nameC_bs == "             " || nameC_bs == "              ") {
		return document.getElementById("btn_ok").style = "background: #7f7f7f;",
    document.querySelector(".redblock").style.display = "block";
  }
    else if (name_bs.length == 0) {
      return document.getElementById("btn_ok").style = "background: #7f7f7f;",
      document.querySelector(".redblock").style.display = "block";
    }
    else if (team_bs.length == 0) {
      return document.getElementById("btn_ok").style = "background: #7f7f7f;",
      document.querySelector(".redblock").style.display = "block";
    }
    else if (lineup_bs.length == 0) {
      return document.getElementById("btn_ok").style = "background: #7f7f7f;",
      document.querySelector(".redblock").style.display = "block";
    }
    else if (nameC_bs.length == 0) {
        return document.getElementById("btn_ok").style = "background: #7f7f7f;",
        document.querySelector(".redblock").style.display = "block";
    }
    else if (name_bs.length < 2) {
        return document.getElementById("btn_ok").style = "background: #7f7f7f;",
        document.querySelector(".redblock").style.display = "block";
    }
    else if (team_bs.length < 1) {
        return document.getElementById("btn_ok").style = "background: #7f7f7f;",
        document.querySelector(".redblock").style.display = "block";
    }
    else if (lineup_bs.length < 1) {
        return document.getElementById("btn_ok").style = "background: #7f7f7f;",
        document.querySelector(".redblock").style.display = "block";
    }
    else if (nameC_bs.length < 2) {
        return document.getElementById("btn_ok").style = "background: #7f7f7f;",
        document.querySelector(".redblock").style.display = "block";
    }
	else {
	return document.getElementById("btn_ok").style = "background: linear-gradient(#1498ff 9%,#2073ff 9%,#206dfc 90%,#1058f4 90%);",
    document.querySelector(".redblock").style.display = "none";
	}
})

function getname() {
  if (name_bs.length == 0) {
      return document.getElementById("nameERR").innerHTML = "Enter your name",
      document.getElementById("getname").style = "border-color: var(--danger);"
  } else if (name_bs.length < 2) {
      return document.getElementById("nameERR").innerHTML = "Name too small",
      document.getElementById("getname").style = "border-color: var(--danger);"
  } else if (name_bs == "null" || name_bs == null || name_bs == "" || name_bs == " " || name_bs == "  " || name_bs == "   " || name_bs == "    " || name_bs == "     " || name_bs == "      " || name_bs == "       " || name_bs == "        " || name_bs == "         " || name_bs == "          " || name_bs == "           " || name_bs == "            " || name_bs == "             " || name_bs == "              ") {
      return document.getElementById("nameERR").innerHTML = "Enter your name",
      document.getElementById("getname").style = "border-color: var(--danger);"
    } else {
        return document.getElementById("nameERR").innerHTML = " ",
        document.getElementById("getname").style = "border-color: black;"
    }
}

function getteam() {
  if (team_bs.length == 0) {
      return document.getElementById("teamERR").innerHTML = "Enter the skin name",
      document.getElementById("team").style = "border-color: var(--danger);"
  }  else if (team_bs.length < 2) {
    return document.getElementById("teamERR").innerHTML = "Name too small",
    document.getElementById("team").style = "border-color: var(--danger);"
    } else if (team_bs == "null" || team_bs == null || team_bs == "" || team_bs == " " || team_bs == "  " || team_bs == "   " || team_bs == "    " || team_bs == "     " || team_bs == "      " || team_bs == "       " || team_bs == "        " || team_bs == "         " || team_bs == "          " || team_bs == "           " || team_bs == "            " || team_bs == "             " || team_bs == "              ") {
      return document.getElementById("teamERR").innerHTML = "Enter the skin name",
      document.getElementById("team").style = "border-color: var(--danger);"
    } else {
        return document.getElementById("teamERR").innerHTML = " ",
        document.getElementById("team").style = "border-color: black;"
    }
}

function getlineup() {
    if (lineup_bs.length == 0) {
        return document.getElementById("lineupERR").innerHTML = "Enter a value description",
        document.getElementById("lineup").style = "border-color: var(--danger);"
    } else if (lineup_bs == "null" || lineup_bs == null || lineup_bs == "" || lineup_bs == " " || lineup_bs == "  " || lineup_bs == "   " || lineup_bs == "    " || lineup_bs == "     " || lineup_bs == "      " || lineup_bs == "       " || lineup_bs == "        " || lineup_bs == "         " || lineup_bs == "          " || lineup_bs == "           " || lineup_bs == "            " || lineup_bs == "             " || lineup_bs == "              ") {
        return document.getElementById("lineupERR").innerHTML = "Enter a value description",
        document.getElementById("lineup").style = "border-color: var(--danger);"
    } else {
        return document.getElementById("lineupERR").innerHTML = " ",
        document.getElementById("lineup").style = "border-color: black;"
    }
  }

  function getcapitan() {
    if (nameC_bs.length == 0) {
        return document.getElementById("capitanERR").innerHTML = "Enter a link",
        document.getElementById("capitan").style = "border-color: var(--danger);"
    } else if (nameC_bs == "null" || nameC_bs == null || nameC_bs == "" || nameC_bs == " " || nameC_bs == "  " || nameC_bs == "   " || nameC_bs == "    " || nameC_bs == "     " || nameC_bs == "      " || nameC_bs == "       " || nameC_bs == "        " || nameC_bs == "         " || nameC_bs == "          " || nameC_bs == "           " || nameC_bs == "            " || nameC_bs == "             " || nameC_bs == "              ") {
        return document.getElementById("capitanERR").innerHTML = "Enter your name",
        document.getElementById("capitan").style = "border-color: var(--danger);"
      } else {
          return document.getElementById("capitanERR").innerHTML = " ",
          document.getElementById("capitan").style = "border-color: black;"
      }
  }

function setblackborder()
{
    document.getElementById("lineupERR").innerHTML = " ",
    document.getElementById("lineup").style = "border-color: black;"
    document.getElementById("teamERR").innerHTML = " ",
    document.getElementById("team").style = "border-color: black;"
    document.getElementById("nameERR").innerHTML = " ",
    document.getElementById("getname").style = "border-color: black;"
    document.getElementById("capitanERR").innerHTML = " ",
    document.getElementById("capitan").style = "border-color: black;"
}