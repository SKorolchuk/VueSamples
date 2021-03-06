﻿module Sample.KO3 {

    var model = {
        itemToAdd: "",
        items: ["Alpha", "Beta", "Gamma"],
        selected: [],
    };

    new Vue({
        el: '#sample',
        data: model,
        methods: {
            addItem: function (e) {
                e.preventDefault();
                if (this.itemToAdd) {
                    this.items.push(this.itemToAdd);
                    this.itemToAdd = "";
                }
            },
            removeSelected: function () {
                for (var i = 0; i < this.selected.length; i++) {
                    var item = this.selected[i];
                    this.items.remove(item);
                }
                this.selected = [];
            },
            sortItems: function () {
                this.items.sort((s1: string, s2: string) => {
                    s1 = s1.toLowerCase();
                    s2 = s2.toLowerCase();
                    return s1 < s2 ? -1 : s1 > s2 ? 1 : 0;
                });
            },
        },
    });
}