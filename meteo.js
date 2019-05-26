//url = 'https://api.archives-ouvertes.fr/search/DAVID/?q=*:*&rows=1000&wt=json';
const Almost = [
    {
        nom: "AIT%20%EL%20%MAHJOUB",
        prenom: "YOUSSEF"
    },
    {
        nom: "AUGER",
        prenom: "David"
    },
    {
        nom: "BABICHEVA",
        prenom: "Tatiana"
    },
    {
        nom: "BARTH",
        prenom: "Dominique"
    },
    {
        nom: "BEN%20%HASSINE",
        prenom: "Nesrine"
    },
    {
        nom: "BENNACEUR",
        prenom: "Mokhtar%20%Walid"
    },
    {
        nom: "BOUDARD",
        prenom: "Mélanie"
    },
    {
        nom: "BOUGUEROUA",
        prenom: "Sana"
    },
    {
        nom: "BOUHAMOUM",
        prenom: "Redouane"
    },
    {
        nom: "BABICHEVA",
        prenom: "Tatiana"
    },
    {
        nom: "CADERE",
        prenom: "Christian"
    },
    {
        nom: "CHEN",
        prenom: "Wei"
    },
    {
        nom: "CHOUTRI",
        prenom: "Amira"
    },
    {
        nom: "COUBAULT",
        prenom: "Amelie"
    },
    {
        nom: "COUCHENEY",
        prenom: "Pierre"
    },
    {
        nom: "EHOUNOU",
        prenom: "Joseph"
    },
    {
        nom: "FOURNEAU",
        prenom: "Jean-Michel"
    },
    {
        nom: "GARDY",
        prenom: "Danièle"
    },
    {
        nom: "GUIRAUD",
        prenom: "Mael"
    },
    {
        nom: "HIADSI",
        prenom: "Mohamed"
    },
    {
        nom: "HOCHE",
        prenom: "Toussaint"
    },
    {
        nom: "HOUISSA",
        prenom: "ASMA"
    },
    {
        nom: "ISSAD",
        prenom: "Mélissa"
    },
    {
        nom: "KLOUL",
        prenom: "Leïla"
    },
    {
        nom: "MARINCA",
        prenom: "Dana"
    },
    {
        nom: "MARSAN",
        prenom: "Laurent"
    },
    {
        nom: "MAUTOR",
        prenom: "Thierry"
    },
    {
        nom: "MENG",
        prenom: "Huixing"
    },
    {
        nom: "NOULEHO%20%ILEMO",
        prenom: "STEFI"
    },
    {
        nom: "PERRONIN",
        prenom: "Laurence"
    },
    {
        nom: "QUESSETTE",
        prenom: "Franck"
    },
    {
        nom: "RODIER",
        prenom: "Lise"
    },
    {
        nom: "SÉGARD",
        prenom: "Sébastien"
    },
    {
        nom: "STROZECKI",
        prenom: "Yann"
    },
    {
        nom: "VEKRIS",
        prenom: "Dimitrios"
    },
    {
        nom: "VIAL",
        prenom: "Sandrine"
    },
    {
        nom: "VOLAND",
        prenom: "Mathieu"
    },

];
const PETRUS = [
    {
        nom: "ANCIAUX",
        prenom: "Nicolas"
    },

    {
        nom: "BOUGANIM",
        prenom: "Luc"
    },
    {
        nom: "ERSOZ",
        prenom: "Aydogan"
    },
    {
        nom: "ERSOZ",
        prenom: "Elif"
    },
    {
        nom: "KATSOURAKI",
        prenom: "Athanasia"
    },
    {
        nom: "LADJEL",
        prenom: "Riad"
    },
    {
        nom: "CADERE",
        prenom: "Saliha"
    },
    {
        nom: "LOUDET",
        prenom: "Julien"
    },
    {
        nom: "MANEA",
        prenom: "Oana"
    },
    {
        nom: "PUCHERAL",
        prenom: "Philippe"
    },
    {
        nom: "SANDU%20%POPA",
        prenom: "Iulian"
    },
    {
        nom: "SCERRI",
        prenom: "Guillaume"
    },
    {
        nom: "SCHNEIDER",
        prenom: "Laurent"
    },
    {
        nom: "CADERE",
        prenom: "Paul"
    },
    {
        nom: "TSOLOVOS",
        prenom: "Dimitrios"
    }


];
const ADAM = [
    {
        nom: "ALSHAER",
        prenom: "Mohammad"
    },
    {
        nom: "BOUZEGHOUB",
        prenom: "Mokrane"
    },
    {
        nom: "Mokrane",
        prenom: "Mariem"
    },
    {
        nom: "BRICAGE",
        prenom: "Marie"
    },
    {
        nom: "FINANCE",
        prenom: "Beatrice"
    },
    {
        nom: "KANTARINIS",
        prenom: "Alexandros"
    },
    {
        nom: "KEDAD",
        prenom: "Zoubida"
    },
    {
        nom: "KELLOU",
        prenom: "Kenza"
    },
    {
        nom: "KOUTRAKI",
        prenom: "Maria"
    },
    {
        nom: "LOPES",
        prenom: "Stephane"
    },
    {
        nom: "LOYER",
        prenom: "Yann"
    },
    {
        nom: "MASRI",
        prenom: "Ali"
    },
    {
        nom: "MOUSHEIMISH",
        prenom: "Raef"
    },
    {
        nom: "MUSTAPHA",
        prenom: "Ahmad"
    },
    {
        nom: "OUKSILI",
        prenom: "Hanane"
    },
    {
        nom: "PREDA",
        prenom: "Nicoleta"
    },
    {
        nom: "RAMOLY",
        prenom: "Nathan"
    },
    {
        nom: "RIHANY",
        prenom: "Mohamad"
    },
    {
        nom: "TAHER",
        prenom: "Yehia"

    },
    {
        nom: "TONTHAT",
        prenom: "DaiHai"
    },
    {
        nom: "YEH",
        prenom: "Laurent"
    },
    {
        nom: "ZEITOUNI",
        prenom: "ZEITOUNI"
    },
    {
        nom: "ZEMRI",
        prenom: "ZEMRI"
    }
];
const type = ["COMM", "ART", "THESE", "HDR", "LECTURE", "POSTER", "COUV", "DOUV", "OTHER"];
var result = [];
var tab;

Chart.defaults.global.defaultFontFamily = 'Nunito', '-apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif';
Chart.defaults.global.defaultFontColor = '#858796';

function clearInner(node) {
    while (node.hasChildNodes()) {
        clear(node.firstChild);
    }
}

function clear(node) {
    while (node.hasChildNodes()) {
        clear(node.firstChild);
    }
    node.parentNode.removeChild(node);
}

function getparannee(annee, equipe, resolve, reject) {
    return new Promise(function (resolve, reject) {
        if(equipe == false){
            var url = "https://api.archives-ouvertes.fr/search/DAVID/?q=*&fq=producedDateY_i:" + annee + "&rows=1000&indent=true&facet=true&facet.field=docType_s";
        }else{
            var url = "https://api.archives-ouvertes.fr/search/DAVID/?q=*";
            $.each(equipe, function (key, value) {
                url += value.nom + "%20OR%20";
            });
            url += "*&fq=producedDateY_i:" + annee + "&rows=1000&indent=true&facet=true&facet.field=docType_s";
        }
        console.log(url);
        $.ajax({
            type: 'GET',
            url: url,
            dataType: 'json',
            success: function (data) {
                result[annee] = data;
                resolve(data);
            }
        });
    });
}

function compact(){
    var r = [];
    for (var i = 0; i < 5; i++){
        r[i] = result[i + 2015];
    }
    return r;
}

function fill() {
    for (j = 0; j < result.length; j++) {
        res = result[j].facet_counts.facet_fields.docType_s
        $.each(res, function (key, item) {
            if (item == "COMM") {
                tab[0][j] += res[key + 1];
            }
            if (item == "ART") {
                tab[1][j] += res[key + 1];
            }
            if (item == "THESE") {
                tab[2][j] += res[key + 1];
            }
            if (item == "HDR") {
                tab[3][j] += res[key + 1];
            }
            if (item == "LECTURE") {
                tab[4][j] += res[key + 1];
            }
            if (item == "POSTER") {
                tab[5][j] += res[key + 1];
            }
            if (item == "COUV") {
                tab[6][j] += res[key + 1];
            }
            if (item == "DOUV") {
                tab[7][j] += res[key + 1];
            }
            if (item == "OTHER") {
                tab[8][j] += res[key + 1];
            }
        });
    }

}

function fillTab() {
    var i = 0;
    $('#dataTable').DataTable().clear().draw();
    $.each(tab, function (key, item) {
        $('#dataTable').dataTable().fnAddData(
            [
                type[i],
                item[0],
                item[1],
                item[2],
                item[3],
                item[4]
            ]
        );
        i++;
    });
    $('#dataTable').dataTable();
}

function fillLineChart(data) {
    var ctx = document.getElementById("myAreaChart");
    var myLineChart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: ["2015", "2016", "2017", "2018", "2019"],
            datasets: [
                {
                    label: type[0],
                    backgroundColor: "rgba(78, 115, 223, 0.05)",
                    borderColor: "rgba(78, 115, 223, 1)",
                    data: data[0],
                },
                {
                    label: type[1],
                    backgroundColor: "rgba(0, 125, 44, 0.05)",
                    borderColor: "rgba(0, 125, 44, 1)",
                    data: data[1],
                },
                {
                    label: type[2],
                    backgroundColor: "rgba(74, 125, 44, 0.05)",
                    borderColor: "rgba(74, 125, 44, 1)",
                    data: data[2],
                },
                {
                    label: type[3],
                    backgroundColor: "rgba(74, 47, 0, 0.05)",
                    borderColor: "rgba(74, 47, 0, 1)",
                    data: data[3],
                },
                {
                    label: type[4],
                    backgroundColor: "rgba(74, 0, 0, 0.05)",
                    borderColor: "rgba(74, 0, 0, 1)",
                    data: data[4],
                },
                {
                    label: type[5],
                    backgroundColor: "rgba(255, 141, 170, 0.05)",
                    borderColor: "rgba(255, 141, 170, 1)",
                    data: data[5],
                },
                {
                    label: type[6],
                    backgroundColor: "rgba(121, 18, 255, 0.05)",
                    borderColor: "rgba(121, 18, 255, 1)",
                    data: data[6],
                },
                {
                    label: type[7],
                    backgroundColor: "rgba(121, 18, 95, 0.05)",
                    borderColor: "rgba(121, 18, 95, 1)",
                    data: data[7],
                },
                {
                    label: type[8],
                    backgroundColor: "rgba(205, 235, 0, 0.05)",
                    borderColor: "rgba(205, 235, 0, 1)",
                    data: data[8],
                },
            ],
        },
        options: {
            maintainAspectRatio: false,
            layout: {
                padding: {
                    left: 10,
                    right: 25,
                    top: 25,
                    bottom: 0
                }
            },
            scales: {
                xAxes: [{
                    time: {
                        unit: 'date'
                    },
                    gridLines: {
                        display: false,
                        drawBorder: false
                    },
                    ticks: {
                        maxTicksLimit: 7
                    }
                }],
                yAxes: [{
                    ticks: {
                        maxTicksLimit: 5,
                        padding: 10,
                        // Include a dollar sign in the ticks
                        callback: function (value, index, values) {
                            return value;
                        }
                    },
                    gridLines: {
                        color: "rgb(234, 236, 244)",
                        zeroLineColor: "rgb(234, 236, 244)",
                        drawBorder: false,
                        borderDash: [2],
                        zeroLineBorderDash: [2]
                    }
                }],
            },
            legend: {
                display: true
            },
            tooltips: {
                backgroundColor: "rgb(255,255,255)",
                bodyFontColor: "#858796",
                titleMarginBottom: 10,
                titleFontColor: '#6e707e',
                titleFontSize: 14,
                borderColor: '#dddfeb',
                borderWidth: 1,
                xPadding: 15,
                yPadding: 15,
                displayColors: false,
                intersect: false,
                mode: 'index',
                caretPadding: 10,
                callbacks: {
                    label: function (tooltipItem, chart) {
                        var datasetLabel = chart.datasets[tooltipItem.datasetIndex].label || '';
                        return datasetLabel + ': ' + tooltipItem.yLabel;
                    }
                }
            },
            title: {
                display: true,
                text: "Nombre de Publication par Type et par Année",
            }
        }
    });
}

function fillPublication() {
    clearInner(document.getElementById("result"));
    for (var i = 2015; i < 2020; i++){
        content = "<h3>" + i + "</h3><hr>";
        $("#result").append(content);
        $.each(result[i].response.docs, function (key, value) {
            content = "<div class='row' style='margin-top: 20px'>" +
                "           <div class='col-md-2'> [ " + value.docid + " ] </div>" +
                "           <div class='col-md-10'>" + value.label_s + "<br>" +
                "               <a href='" + value.uri_s + "' target='_blank'>" + value.uri_s + "</a>" +
                "           </div>" +
                "     </div>"
            $("#result").append(content);
        });
    }
}

function getDavid(){
    tab = [
        [0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0]
    ];
    result = [];
    Promise.all([
        getparannee(2015, false, function (data) {
            console.log(data);
        }, function (e) {
            console.error(e)
        }),
        getparannee(2016, false, function (data) {
            console.log(data);
        }, function (e) {
            console.error(e)
        }),
        getparannee(2017, false, function (data) {
            console.log(data);
        }, function (e) {
            console.error(e)
        }),
        getparannee(2018, false, function (data) {
            console.log(data);
        }, function (e) {
            console.error(e)
        }),
        getparannee(2019, false, function (data) {
            console.log(data);
        }, function (e) {
            console.error(e)
        })
    ]).then(function () {
        console.log(result);
        fillPublication();
        result = compact();
        fill();
        fillTab(tab);
        fillLineChart(tab);
    })
}

function getAdam() {
    tab = [
        [0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0]
    ];
    result = [];
    Promise.all([
        getparannee(2015, ADAM, function (data) {
           console.log(data);
        }, function (e) {
           console.error(e)
        }),
        getparannee(2016, ADAM, function (data) {
            console.log(data);
        }, function (e) {
            console.error(e)
        }),
        getparannee(2017, ADAM, function (data) {
            console.log(data);
        }, function (e) {
            console.error(e)
        }),
        getparannee(2018, ADAM, function (data) {
            console.log(data);
        }, function (e) {
            console.error(e)
        }),
        getparannee(2019, ADAM, function (data) {
            console.log(data);
        }, function (e) {
            console.error(e)
        })
    ]).then(function () {
        fillPublication();
        result = compact();
        fill();
        fillTab(tab);
        fillLineChart(tab);
    })
}

function getAlmost() {
    tab = [
        [0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0]
    ];
    result = [];
    Promise.all([
        getparannee(2015, Almost, function (data) {
            console.log(data);
        }, function (e) {
            console.error(e)
        }),
        getparannee(2016, Almost, function (data) {
            console.log(data);
        }, function (e) {
            console.error(e)
        }),
        getparannee(2017, Almost, function (data) {
            console.log(data);
        }, function (e) {
            console.error(e)
        }),
        getparannee(2018, Almost, function (data) {
            console.log(data);
        }, function (e) {
            console.error(e)
        }),
        getparannee(2019, Almost, function (data) {
            console.log(data);
        }, function (e) {
            console.error(e)
        })
    ]).then(function () {
        fillPublication();
        result = compact();
        fill();
        fillTab(tab);
        fillLineChart(tab);
    })
}

function getPetrus() {
    tab = [
        [0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0]
    ];
    result = [];
    Promise.all([
        getparannee(2015, PETRUS, function (data) {
            console.log(data);
        }, function (e) {
            console.error(e)
        }),
        getparannee(2016, PETRUS, function (data) {
            console.log(data);
        }, function (e) {
            console.error(e)
        }),
        getparannee(2017, PETRUS, function (data) {
            console.log(data);
        }, function (e) {
            console.error(e)
        }),
        getparannee(2018, PETRUS, function (data) {
            console.log(data);
        }, function (e) {
            console.error(e)
        }),
        getparannee(2019, PETRUS, function (data) {
            console.log(data);
        }, function (e) {
            console.error(e)
        })
    ]).then(function () {
        fillPublication();
        result = compact();
        fill();
        fillTab(tab);
        fillLineChart(tab);
    })
}