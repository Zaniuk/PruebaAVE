const f1 = document.getElementById("f_1");
const f2 = document.getElementById("f_2");
const f3 = document.getElementById("f_3");
const f4 = document.getElementById("f_4");
const f5 = document.getElementById("f_5");
const f6 = document.getElementById("f_6");

f1.addEventListener("click", function () {
    getPokemonsCountByType("fire").then((data) => {
        console.log(data);
    }
    );
});

f2.addEventListener("click", function () {
    getAllPokemonsByTypes("fire", "water").then((data) => {
        console.log(data);
    }
    );
});

f3.addEventListener("click", function () {
    getPokemonNameById(1).then((data) => {
        console.log(data);
    }
    );
}
);

f4.addEventListener("click", function () {
    getBaseStatsById(1).then((data) => {
        console.log(data);
    }
    );
}
);

f5.addEventListener("click", async function () {
    const data = await sortPokemons([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], (a, b) => {
        return a.id - b.id;
      }
      );
    console.log(data);
    
}
);

f6.addEventListener("click", function () {
    checkPokemonType (1, "fire").then((data) => {
        console.log(data);
    }
)}

);
