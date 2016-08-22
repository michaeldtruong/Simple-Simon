"use strict";

    var ships = [
        {
            "name": "Regalia",
            "maxHp": 1200,
            "hp": 1200,
            "maxEnergy": 1000,
            "energy": 1000,
            "speed": 1000,
            "engineTemp": 1,
            "image": "<img src='/img/regalia1.png' class='ship'>",
            "boosters": "<img src='/img/booster.png' class='allBoosters' ",
            "boosterAmount": 6,
            "weapons": [
                {
                    "name": "Force-Coolant",
                    "description": "instantly cools down the engine with the cost of energy",
                    "damage": 0,
                    "energyCost": 200,
                    "heatGeneration": 0,
                    "castingTime": 0,
                    "coolDown": 0,
                    "special": function() {
                        $(".audioHeal2").trigger("play");
                        if (ships[0].engineTemp <= 3) {
                            ships[0].engineTemp = 1;
                        } else {
                        ships[0].engineTemp -= 3;
                        }
                    },
                    "animation": function() {
                        console.log("Player: " + this.name + " animation");
                    }
                }, {
                    "name": "Restore-Energy",
                    "description": "Restores Energy",
                    "damage": 0,
                    "energyCost": 0,
                    "heatGeneration": 0,
                    "castingTime": 0,
                    "coolDown": 0,
                    "special": function() {
                        $(".audioHeal1").trigger("play");
                        if (ships[0].energy >= 700) {
                            ships[0].energy = 1000;
                        } else {
                        ships[0].energy += 300;
                        }
                    },
                    "animation": function() {
                        console.log("Player: " + this.name + " animation");
                    }
                }, {
                    "name": "Proton-Cannon",
                    "description": "hurts a lot",
                    "damage": 300,
                    "energyCost": 200,
                    "heatGeneration": 3,
                    "castingTime": 2,
                    "coolDown": 0,
                    "special": function() {
                        $(".audioAtk1").trigger("play");
                    },
                    "animation": function() {
                        $(".audioProton").trigger("play");
                        if (ships[0] == ships[playerShip]) {
                            $(".enemySideAlert").animate({
                                opacity: "0.6"
                            }, 50).animate({
                                opacity: "0"
                            }, 50);
                            for (var i = 0; i < 4; i++) {
                                $(".enemyShipImg").animate({
                                    opacity: "0.5"
                                }, 50).animate({
                                    opacity: "1"
                                }, 50);
                            }
                        } else if (ships[0] == ships[enemyShip]) {
                            $(".playerSideAlert").animate({
                                opacity: "0.6"
                            }, 50).animate({
                                opacity: "0"
                            }, 50);
                            for (var i = 0; i < 4; i++) {
                                $(".playerShipImg").animate({
                                    opacity: "0.5"
                                }, 50).animate({
                                    opacity: "1"
                                }, 50);
                            }
                        }
                    } 
                }, {
                    "name": "Rail-Gun",
                    "description": "small dmg",
                    "damage": 50,
                    "energyCost": 100,
                    "heatGeneration": 1,
                    "castingTime": 0,
                    "coolDown": 0,
                    "special": function() {
                        $(".audioAtk2").trigger("play");
                    },
                    "animation": function() {
                        if (ships[0] == ships[playerShip]) {
                            $(".enemySideAlert").animate({
                                opacity: "0.6"
                            }, 50).animate({
                                opacity: "0"
                            }, 50);
                            for (var i = 0; i < 4; i++) {
                                $(".enemyShipImg").animate({
                                    opacity: "0.5"
                                }, 50).animate({
                                    opacity: "1"
                                }, 50);
                            }
                        } else if (ships[0] == ships[enemyShip]) {
                            $(".playerSideAlert").animate({
                                opacity: "0.6"
                            }, 50).animate({
                                opacity: "0"
                            }, 50);
                            for (var i = 0; i < 4; i++) {
                                $(".playerShipImg").animate({
                                    opacity: "0.5"
                                }, 50).animate({
                                    opacity: "1"
                                }, 50);
                            }
                        }
                    }
                }, {
                    "name": "Barrier",
                    "description": "protection",
                    "damage": 0,
                    "energyCost": 200,
                    "heatGeneration": 0,
                    "castingTime": 0,
                    "coolDown": 0,
                    "special": function() {
                        $(".audioBuff1").trigger("play");
                    },
                    "animation": function() {
                        console.log("Player: " + this.name + " animation");
                    }
                }
            ]

        }, {
            "name": "Exodus",
            "maxHp": 1700,
            "hp": 1700,
            "energy": 1000,
            "maxEnergy": 1000,
            "speed": 1500,
            "engineTemp": 1,
            "image": "<img src='/img/exodus.png' class='ship'>",
            "boosters": "<img src='/img/booster.png' class='allBoosters' ",
            "boosterAmount": 6,
            "weapons": [
                {
                    "name": "Force-Coolant",
                    "damage": 0,
                    "energyCost": 200,
                    "heatGeneration": 0,
                    "castingTime": 0,
                    "coolDown": 0,
                    "special": function() {
                        $(".audioHeal2").trigger("play");
                        if (ships[1].engineTemp <= 3) {
                            ships[1].engineTemp = 1;
                        } else {
                        ships[1].engineTemp -= 3;
                        }
                    },
                    "animation": function() {
                        console.log("Enemy: " + this.name + " animation");
                    }
                }, {
                    "name": "Restore-Energy",
                    "damage": 0,
                    "energyCost": 0,
                    "heatGeneration": 0,
                    "castingTime": 0,
                    "coolDown": 0,
                    "special": function() {
                        $(".audioHeal1").trigger("play");
                        if (ships[1].energy >= 700) {
                            ships[1].energy = 1000;
                        } else {
                        ships[1].energy += 300;
                        }
                    },
                    "animation": function() {
                        console.log("Player: " + this.name + " animation");
                    }
                }, {
                    "name": "Proton-Cannon",
                    "damage": 300,
                    "energyCost": 200,
                    "heatGeneration": 3,
                    "castingTime": 2,
                    "coolDown": 0,
                    "special": function() {
                        $(".audioAtk1").trigger("play");
                    },
                    "animation": function() {
                        if (ships[1] == ships[playerShip]) {
                            $(".enemySideAlert").animate({
                                opacity: "0.6"
                            }, 50).animate({
                                opacity: "0"
                            }, 50);
                            for (var i = 0; i < 4; i++) {
                                $(".enemyShipImg").animate({
                                    opacity: "0.5"
                                }, 50).animate({
                                    opacity: "1"
                                }, 50);
                            }
                        } else if (ships[1] == ships[enemyShip]) {
                            $(".playerSideAlert").animate({
                                opacity: "0.6"
                            }, 50).animate({
                                opacity: "0"
                            }, 50);
                            for (var i = 0; i < 4; i++) {
                                $(".playerShipImg").animate({
                                    opacity: "0.5"
                                }, 50).animate({
                                    opacity: "1"
                                }, 50);
                            }
                        }
                    } 
                }, {
                    "name": "Rail-Gun",
                    "damage": 50,
                    "energyCost": 100,
                    "heatGeneration": 1,
                    "castingTime": 0,
                    "coolDown": 0,
                    "special": function() {
                        $(".audioAtk2").trigger("play");
                    },
                    "animation": function() {
                        if (ships[1] == ships[playerShip]) {
                            $(".enemySideAlert").animate({
                                opacity: "0.6"
                            }, 50).animate({
                                opacity: "0"
                            }, 50);
                            for (var i = 0; i < 4; i++) {
                                $(".enemyShipImg").animate({
                                    opacity: "0.5"
                                }, 50).animate({
                                    opacity: "1"
                                }, 50);
                            }
                        } else if (ships[1] == ships[enemyShip]) {
                            $(".playerSideAlert").animate({
                                opacity: "0.6"
                            }, 50).animate({
                                opacity: "0"
                            }, 50);
                            for (var i = 0; i < 4; i++) {
                                $(".playerShipImg").animate({
                                    opacity: "0.5"
                                }, 50).animate({
                                    opacity: "1"
                                }, 50);
                            }
                        }
                    }
                }, {
                    "name": "Particle-Ray",
                    "damage": 150,
                    "energyCost": 200,
                    "heatGeneration": 1,
                    "castingTime": 0,
                    "coolDown": 0,
                    "special": function() {
                        $(".audioAtk3").trigger("play");
                    },
                    "animation": function() {
                        if (ships[1] == ships[playerShip]) {
                            $(".enemySideAlert").animate({
                                opacity: "0.6"
                            }, 50).animate({
                                opacity: "0"
                            }, 50);
                            for (var i = 0; i < 4; i++) {
                                $(".enemyShipImg").animate({
                                    opacity: "0.5"
                                }, 50).animate({
                                    opacity: "1"
                                }, 50);
                            }
                        } else if (ships[1] == ships[enemyShip]) {
                            $(".playerSideAlert").animate({
                                opacity: "0.6"
                            }, 50).animate({
                                opacity: "0"
                            }, 50);
                            for (var i = 0; i < 4; i++) {
                                $(".playerShipImg").animate({
                                    opacity: "0.5"
                                }, 50).animate({
                                    opacity: "1"
                                }, 50);
                            }
                        }
                    }
                }
            ]
        }
    ];

    var playerShip = 0;
    var enemyShip = 1;
    var speed = 400;
    var enemyTurnCounter = 5;
    var enemyTurnCounterRestart = 5;
    var enemySpeed = 500;
    var wrongInputDelay = 3000;
    var wrongInputSpeed = 400;
    var afterWeaponSelectDelay = 300;
    var buttonsAnimateSpeed = 200;
    var statusBarsSpeed = 500;
    var weaponMenuDrawSpeed = 500;
    var iteration = 1;
    var sequence = [];
    var enemyTurnTimer;
    var input;

    function drawShips() {
        for (var i = 0; i < ships.length; i++) {
            if (ships[enemyShip] == ships[i]) {
                $(".enemyShipImg").append(ships[enemyShip].image)
            } else if (ships[playerShip] == ships[i]) {
                $(".playerShipImg").append(ships[playerShip].image)
            }
        }
        for (var i = 0; i < ships[enemyShip].boosterAmount; i++ ) {
            $(".enemyShipImg").append(ships[enemyShip].boosters + "id='exodusBooster" + i + "'>");    
        }
        for (var i = 0; i < ships[playerShip].boosterAmount; i++ ) {
            $(".playerShipImg").append(ships[playerShip].boosters + "id='regaliaBooster" + i + "'>");    
        }
    }

    function disableInput() {
        document.getElementsByClassName("repeat")[0].disabled = true;
        document.getElementsByClassName("buttons")[0].disabled = true;
        document.getElementsByClassName("buttons")[1].disabled = true;
        document.getElementsByClassName("buttons")[2].disabled = true;
        document.getElementsByClassName("buttons")[3].disabled = true;
    }

    function enableInput() {
        document.getElementsByClassName("repeat")[0].disabled = false;
        document.getElementsByClassName("buttons")[0].disabled = false;
        document.getElementsByClassName("buttons")[1].disabled = false;
        document.getElementsByClassName("buttons")[2].disabled = false;
        document.getElementsByClassName("buttons")[3].disabled = false;  
    }

    function outputSequence(step) {
        switch (step) {
            case 1:
             $("#but1").animate({
                opacity: "0.3"
             }, buttonsAnimateSpeed).animate({
                opacity: "1"
             }, buttonsAnimateSpeed);
             break;
             case 2:
             $("#but2").animate({
                opacity: "0.3"
             }, buttonsAnimateSpeed).animate({
                opacity: "1"
             }, buttonsAnimateSpeed);
             break;
             case 3:
             $("#but3").animate({
                opacity: "0.3"
             }, buttonsAnimateSpeed).animate({
                opacity: "1"
             }, buttonsAnimateSpeed);
             break;
             case 4:
             $("#but4").animate({
                opacity: "0.3"
             }, buttonsAnimateSpeed).animate({
                opacity: "1"
             }, buttonsAnimateSpeed);
             break;
        }
    }

    function checkInput(input) {
        $("#but" + input).animate({
                opacity: "0.3"
             }, buttonsAnimateSpeed).animate({
                opacity: "1"
             }, buttonsAnimateSpeed);
        if (input == sequence[0]) {
            sequence.shift(sequence[0]);
            console.log(sequence);
            document.getElementsByClassName("repeat")[0].disabled = true;
        } else {
            if (ships[playerShip].engineTemp > 1) {
            ships[playerShip].engineTemp -= 1;
            }
            $(".audioCancel").trigger("play");
            drawStatus();
            $(".buttons").animate({
                backgroundColor: "#333"
            }, wrongInputSpeed);
            disableInput()
            setTimeout(function() {
                $("#but1").animate({
                    backgroundColor: "#004d00"
                }, wrongInputSpeed);
                $("#but2").animate({
                    backgroundColor: "#660000"
                }, wrongInputSpeed);
                $("#but3").animate({
                    backgroundColor: "#003366"
                }, wrongInputSpeed);
                $("#but4").animate({
                    backgroundColor: "#b3b300"
                }, wrongInputSpeed);
            sequence = [];
            }, wrongInputDelay - 600)
            setTimeout(startSequence, wrongInputDelay)
        } if (sequence.length == 0) {
            $(".audioConfirm").trigger("play");
            disableInput();
            drawWeaponMenu();
            clearInterval(enemyTurnTimer);
        }
    }

    function startSequence() {
        $(".audioBattle").trigger("play");
        disableInput();
        var step = Math.floor((Math.random() * 4) + 1);
        sequence.push(step);
        outputSequence(step);  
        console.log(sequence);
        if (iteration++ < ships[playerShip].engineTemp) {
            setTimeout(startSequence, speed);
        } else if (iteration == ships[playerShip].engineTemp + 1) {
            iteration = 1;
            enableInput();
        }
    }

    function repeatSequence() {
        disableInput();
        outputSequence(sequence[iteration - 1]);
        if (iteration++ < ships[playerShip].engineTemp) {
            setTimeout(repeatSequence, speed);  
        } else if (iteration == ships[playerShip].engineTemp + 1) {
            iteration = 1;
            enableInput();
        }
    }

    function drawWeaponMenu() {
        for (var i = 0; i < ships[playerShip].weapons.length; i++) {
            $(".weaponMenu").append("<button class='weapons' id='" + ships[playerShip].weapons[i].name + "'>" + ships[playerShip].weapons[i].name + "</button>");
            if (ships[playerShip].weapons[i].energyCost > ships[playerShip].energy) {
                document.getElementById(ships[playerShip].weapons[i].name).disabled = true;
            }
            $(".weaponMenu").css("display", "block");
            $(".weaponDescription").css("display", "block");
            $(".weaponMenu").animate({
                opacity: "0.8",
                top: "340px"
            }, weaponMenuDrawSpeed);
            $(".weaponDescription").animate({
                opacity: "0.8",
                top: "250px"
            }, weaponMenuDrawSpeed);
        }
        $(".weapons").hover(function() {
            for (var i = 0; i < ships[playerShip].weapons.length; i++) {
                if ($(this).attr('id') == ships[playerShip].weapons[i].name) {
                    $(".weaponDescription").html(ships[playerShip].weapons[i].description);
                }
            } 
        }, function() {
            $(".weaponDescription").html("");
        });
        $(".weapons").click(function() {
            for (var i = 0; i < ships[playerShip].weapons.length; i++) {
                if ($(this).attr('id') == ships[playerShip].weapons[i].name) {
                    $(".audioClick").trigger("play");
                    ships[enemyShip].hp -= ships[playerShip].weapons[i].damage;
                    ships[playerShip].energy -= ships[playerShip].weapons[i].energyCost;
                    ships[playerShip].engineTemp += ships[playerShip].weapons[i].heatGeneration;
                    ships[playerShip].weapons[i].special();
                    ships[playerShip].weapons[i].animation();
                    drawStatus();
                    $(".weaponMenu").animate({
                        opacity: "0",
                        top: "360px"
                    }, 1);
                    $(".weaponDescription").animate({
                        opacity: "0",
                        top: "230px"
                    }, 1);
                    $(".battleLog").append("<div>You use " + ships[playerShip].weapons[i].name + "</div>");
                    $(".weaponMenu").html("");
                    $(".weaponMenu").css("display", "none");
                    $(".weaponDescription").css("display", "none");
                    checkGameOver();
                    setTimeout(startSequence, afterWeaponSelectDelay);
                    setTimeout(runEnemyTurn, afterWeaponSelectDelay);
                }
            }
        });
    }

    function enemyTurn() {
        enemyTurnCounter--;
        var enemyChoice = Math.floor((Math.random() * (ships[enemyShip].weapons.length - 2)) + 2);
        if (ships[enemyShip].energy < 400 && enemyTurnCounter == 0) {
            ships[enemyShip].weapons[1].special();
            ships[enemyShip].weapons[1].animation();
            ships[enemyShip].energy -= ships[enemyShip].weapons[1].energyCost;
            drawStatus();
            $(".battleLog").append("<div>The enemy uses " +  ships[enemyShip].weapons[1].name + "</div>");
            enemyTurnCounter = enemyTurnCounterRestart;
        } else if (ships[enemyShip].engineTemp > 6 && enemyTurnCounter == 0) {
            ships[enemyShip].weapons[0].special();
            ships[enemyShip].weapons[0].animation();
            ships[enemyShip].energy -= ships[enemyShip].weapons[0].energyCost;
            drawStatus();
            $(".battleLog").append("<div>The enemy uses " +  ships[enemyShip].weapons[0].name + "</div>");
            enemyTurnCounter = enemyTurnCounterRestart;
        } else if (enemyTurnCounter == 0) {
            ships[playerShip].hp -= ships[enemyShip].weapons[enemyChoice].damage;
            ships[enemyShip].energy -= ships[enemyShip].weapons[enemyChoice].energyCost;
            ships[enemyShip].engineTemp += ships[enemyShip].weapons[enemyChoice].heatGeneration;
            ships[enemyShip].weapons[enemyChoice].special();
            ships[enemyShip].weapons[enemyChoice].animation();
            drawStatus();
            $(".battleLog").append("<div>The enemy uses " + ships[enemyShip].weapons[enemyChoice].name + "</div>");
            checkGameOver();
            enemyTurnCounter = enemyTurnCounterRestart;
        }
    }

    function runEnemyTurn() {
        enemyTurnTimer = setInterval(enemyTurn, enemySpeed);
    }

    function drawStatus() {
        var hpPercent = (ships[playerShip].hp / ships[playerShip].maxHp) * 100;
        $(".currentHpBar").animate({
            height: hpPercent + "%"
            }, statusBarsSpeed);
       var energyPercent = (ships[playerShip].energy / ships[playerShip].maxEnergy) * 100;
        $(".currentEnergyBar").animate({
            height: energyPercent + "%"
            }, statusBarsSpeed);
       var hpPercentEnemy = (ships[enemyShip].hp / ships[enemyShip].maxHp) * 100;
        $(".currentHpBarEnemy").animate({
            height: hpPercentEnemy + "%"
            }, statusBarsSpeed);
       var energyPercentEnemy = (ships[enemyShip].energy / ships[enemyShip].maxEnergy) * 100;
        $(".currentEnergyBarEnemy").animate({
            height: energyPercentEnemy + "%"
            }, statusBarsSpeed);
        $(".displayTemp").html(ships[playerShip].engineTemp);
        $(".displayTempEnemy").html(ships[enemyShip].engineTemp);
    }

    function checkGameOver() {
        if (ships[playerShip].hp <= 0) {
            disableInput();
            clearInterval(enemyTurnTimer);
            $(".battleLog").append("<div>You Lose</div>");
        } else if (ships[enemyShip].hp <= 0) {
            disableInput();
            clearInterval(enemyTurnTimer);
            $(".battleLog").append("<div>You Win</div>");
        }
    }

    disableInput();
    drawShips();
    drawStatus();

    $("#but1").click(function() {
        checkInput(1);
    });
    $("#but2").click(function() {
        checkInput(2);
    });
    $("#but3").click(function() {
        checkInput(3);
    });
    $("#but4").click(function() {
        checkInput(4);
    });
    $("#playSequence").click(function() {
        startSequence();
        runEnemyTurn();
    });
    $(".repeat").click(function() {
        repeatSequence();
    });