export default class kanbanAPI {
    static getItem(columnId) {
        const column = read().find(column => column.id == columnId);

        if (!column) {
            return [];
        }

        return column.items;
    };
}


function read() {
    const json = localStorage.getItem("kanban-data");

    if (!json) {
    return [
      {
        id: 1,
        item: [],
      },
      {
        id: 2,
        item: [],
      },
      {
        id: 3,
        item: [],
      },
    ];
    }

  return JSON.parse(json);
}

function save() {
  localStorage.setItem("kanban-data", JSON.stringify(data));
}
