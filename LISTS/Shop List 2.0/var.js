var todo = {
  data: [], // holder for todo list array

  // (A) LOAD DATA FROM LOCAL STORAGE INTO TODO.DATA
  load: function () {
    // (A1) INIT LOCALSTORAGE
    if (localStorage.list == undefined) {
      localStorage.list = "[]";
    }

    // (A2) DECODE PREVIOUS SESSION INTO TODO.DATA
    // todo.data is an array with format of:
    // [0] = Task
    // [1] = Status : 0 not done, 1 completed, 2 cancelled
    todo.data = JSON.parse(localStorage.list);
    todo.list();
  },

  // (B) SAVE CURRENT DATA INTO LOCAL STORAGE
  save: function () {

    localStorage.list = JSON.stringify(todo.data);
    todo.list();
  },

  // (C) DRAW TODO HTML
  list: function () {

    // (C1) CLEAR THE OLD LIST
    var container = document.getElementById("todo-list");
    container.innerHTML = "";

    // (C2) BUILD LIST
    if (todo.data.length > 0) {
      var row = "", el = "";
      for (var key in todo.data) {
        // Item row
        row = document.createElement("div");
        row.classList.add("clearfix");
        row.dataset.id = key;

        // Item text
        el = document.createElement("div");
        el.classList.add("item");
        if (todo.data[key][1] == 1) {
          el.classList.add("done");
        }
        if (todo.data[key][1] == 2) {
          el.classList.add("cx");
        }
        el.innerHTML = todo.data[key][0];
        row.appendChild(el);

        // Cancel button
        el = document.createElement("input");
        el.setAttribute("type", "button");
        el.value = "\u2716";
        el.classList.add("bdel");
        el.addEventListener("click", function () {
          todo.status(this, 2);
        });
        row.appendChild(el);

        // OK button
        el = document.createElement("input");
        el.setAttribute("type", "button");
        el.value = "\u2714";
        el.classList.add("bdone");
        el.addEventListener("click", function () {
          todo.status(this, 1);
        });
        row.appendChild(el);

        // Add row to list
        container.appendChild(row);
      }
    }
  },

  // (D) ADD NEW TODO ITEM
  add: function () {

    let item = document.getElementById("todo-item");
    todo.data.push([item.value, 0]);
    item.value = "";
    todo.save();
  },

  // (E) UPDATE TODO ITEM STATUS
  status: function (el, stat) {

    var parent = el.parentElement;
    todo.data[parent.dataset.id][1] = stat;
    todo.save();
  },

  // (F) DELETE ITEM(S)
  del: function (type) { if (confirm("Delete tasks?")) {
    // (F1) DELETE ALL
    if (type == 0) {
      todo.data = [];
      todo.save();
    }
    // (F2) DELETE ONLY COMPLETED TASKS
    else {
      todo.data = todo.data.filter(row => row[1]==0);
      todo.save();
    }
  }}
};

// (G) PAGE INIT
window.addEventListener("load", function () {
  document.getElementById("todo-delall").addEventListener("click", function () {
    todo.del(0);
  });
  document.getElementById("todo-delcom").addEventListener("click", function () {
    todo.del(1);
  });
  document.getElementById("todo-add").addEventListener("submit", function (evt) {
    evt.preventDefault();
    todo.add();
  });
  todo.load();
});