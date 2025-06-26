// const currentUrl = window.location.href;
// const substringToCheck = "rtvmcloading_m";

// if (currentUrl.includes(substringToCheck)) {

    const settings = {
        water: {
            italiano: {
                MAX: 57
            },

            china: {
                MAX: 38
            },

            buttles: {
                ONE: 19,
                TWO: 38,
                THREE: 57
            }
        },

        coffee: {
            china: {
                MAX: 3000,

                packages: {
                    ONE: 1000,
                    TWO: 2000,
                    THREE: 3000
                },

                limitsEmpty: {
                    ONE: 2000,
                    TWO: 1000,
                    THREE: 0
                }
            },

            italiano: {
                MAX: 2750,

                packages: {
                    ONE: 1000,
                    TWO: 2000,
                    THREE: 2750
                },

                limitsEmpty: {
                    ONE: 1750,
                    TWO: 750,
                    THREE: 0
                }
            }
        },

        milk: {
            small: {
                MAX: 1500,

                packages: {
                    ONE: 1000,
                    TWO: 1500
                },

                limitsEmpty: {
                    ONE: 500,
                    TWO: 0,
                }
            },

            big: {
                MAX: 2500,

                packages: {
                    ONE: 1000,
                    TWO: 2000,
                    THREE: 2500
                },

                limitsEmpty: {
                    ONE: 1500,
                    TWO: 500,
                    THREE: 0
                }
            }
        },

        chocolate: {
            packages: {
                ONE: 500,
                TWO: 1000,
                THREE: 1500,
                FOUR: 2000
            },

            limitsEmpty: {
                ONE: 1500,
                TWO: 1000,
                THREE: 500,
                FOUR: 0
            }
        },

        shugar: {
            packages: {
                ONE: 1000,
                TWO: 1500,
            },

            limitsEmpty: {
                ONE: 1000,
                TWO: 500,
                THREE: 0
            }
        },

        cups: {
            packages: {
                ONE: 40,
                TWO: 80,
                THREE: 120,
                FOUR: 160,
                FIVE: 200,
                SIX: 240
            },

            limitsEmpty: {
                ONE: 200,
                TWO: 160,
                THREE: 120,
                FOUR: 80,
                FIVE: 40,
                SIX: 0
            },

            isRound: true
        },

        lids: {
            packages: {
                ONE: 100,
                TWO: 200
            },

            limitsEmpty: {
                ONE: 150,
                TWO: 0
            }
        },

        ingredients: {
            isRound: true,

            small: {
                MAX: 2500,

                packages: {
                    ONE: 1000,
                    TWO: 2000,
                    THREE: 2500
                },

                limitsEmpty: {
                    ONE: 1900,
                    TWO: 500,
                    THREE: 0
                }
            },

            big: {
                MAX: 3000,

                packages: {
                    ONE: 1000,
                    TWO: 2000,
                    THREE: 3000
                },

                limitsEmpty: {
                    ONE: 2400,
                    TWO: 1000,
                    THREE: 0
                }
            }
        },

        EMPTY: 0
    }

    function activateApp() {
        function applyStyles(element, styles) {
            for (const property in styles) {
                if (styles.hasOwnProperty(property)) {
                    element.style[property] = styles[property];
                }
            }
        }

        const btn = document.createElement('button');
        btn.innerHTML = '<svg width="30px" height="35px" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 275.353 275.353" xml:space="preserve" fill="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g> <g> <g> <g> <path style="fill:#ffffff;" d="M229.784,199.712c27.269,0,45.568-29.692,45.568-57.419c0-20.117-12.418-22.843-24.562-22.843 c-3.468,0-7.21,0.234-11.167,0.479c-3.195,0.176-6.507,0.332-9.848,0.41l0.039-0.889H1.514c0,42.959,24.132,80.321,59.686,99.49 C24.787,221.333,0,226.043,0,231.445c0,7.865,51.782,14.196,115.659,14.196s115.649-6.331,115.649-14.196 c0-5.432-24.904-10.132-61.454-12.516c10.63-5.725,20.263-13.004,28.529-21.641 C208.026,199.712,219.448,199.712,229.784,199.712z M229.364,128.272c3.683-0.088,7.289-0.244,10.737-0.469 c3.83-0.205,7.464-0.42,10.698-0.42c11.509,0,16.658,2.159,16.658,14.909c0,23.419-15.466,49.515-37.664,49.515 c-9.751,0-18.3-0.205-25.285-1.358C218.559,173.196,227.537,151.731,229.364,128.272z M98.982,97.203 c-0.557-0.547-13.414-13.922,0.156-30.327c16.58-20,0.01-37-0.156-37.166l-3.595,3.595c0.557,0.537,13.414,13.932-0.166,30.327 c-16.58,20.029-0.01,37.039,0.166,37.195L98.982,97.203z M118.737,97.203c-0.557-0.547-13.414-13.922,0.166-30.327 c16.56-20,0-37-0.166-37.166l-3.605,3.595c0.557,0.537,13.414,13.932-0.156,30.327c-16.56,20.039-0.01,37.039,0.166,37.205 L118.737,97.203z M140.251,97.203c-0.557-0.547-13.414-13.922,0.156-30.327c16.57-20,0-37-0.156-37.166l-3.615,3.595 c0.547,0.537,13.424,13.932-0.166,30.327c-16.56,20.039,0,37.039,0.176,37.205L140.251,97.203z"></path> </g> </g> </g> </g> </g></svg>';

        const styles = {
            color: '#ffffff',
            backgroundColor: '#a8741a',
            padding: '10px',
            borderRadius: '50%',
            position: 'fixed',
            top: '30px',
            left: '30px',
            width: '60px',
            height: '60px',
            border: 'none',
            fontSize: '16px',
            padding: '3px 3px 7px 7px',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            fontWeight: 'bold',
            boxShadow: '0 0 10px #80808047',
            cursor: 'pointer'
        };

        applyStyles(btn, styles);

        // ***********************************

        const inpRows = document.querySelectorAll('.machine-list-detail-item-content');

        function getWasAndTake(row) {
            const name = row.firstChild.textContent;
            const rowIngr = row.querySelector('.machine-list-detail-properties');
            const max = rowIngr.firstChild;
            const was = rowIngr.children[1];
            const take = rowIngr.lastChild;

            const nextRow = row.nextElementSibling
            const wasEdit = nextRow.querySelector('.input-was');
            const putEdit = nextRow.querySelector('.input-put');

            return {
                name,
                max,
                was,
                take,
                wasEdit,
                putEdit
            }
        }

        function roundToHondreds(num) {
            return Math.floor(num / 100) * 100;
        }

        function writeValues(obj, values) {
            obj.was.textContent = values.was;
            obj.take.textContent = `+${values.take}`;
            obj.wasEdit.textContent = values.was;
            obj.putEdit.textContent = `+${values.take}`;
        }

        function getMaxAndWas(obj) {
            return {
                max: Math.floor(Number(obj.max.textContent)),
                was: Math.floor(Number(obj.was.textContent))
            }
        }

        function setWater(obj) {
            const { max, was } = getMaxAndWas(obj);

            const howMuch = {
                was: settings.water.buttles.ONE,
                take: settings.water.buttles.ONE
            }

            if (max > settings.water.china.MAX) {
                if (was < settings.water.buttles.TWO) {
                    howMuch.was = settings.water.buttles.ONE;
                    howMuch.take = settings.water.buttles.TWO
                }

                if (was >= settings.water.buttles.TWO) {
                    howMuch.was = settings.water.buttles.TWO;
                    howMuch.take = settings.water.buttles.ONE
                }

                if (was === settings.EMPTY) {
                    howMuch.was = settings.EMPTY;
                    howMuch.take = settings.water.buttles.THREE
                }
            } else {
                if (was < settings.water.buttles.TWO) {
                    howMuch.was = settings.water.buttles.ONE;
                    howMuch.take = settings.water.buttles.ONE
                }

                if (was === settings.EMPTY) {
                    howMuch.was = settings.EMPTY;
                    howMuch.take = settings.water.buttles.TWO
                }
            }

            writeValues(obj, howMuch);
        }

        function setCoffee(obj) {
            const { max, was } = getMaxAndWas(obj);
            const model = max > settings.coffee.italiano.MAX ? 'china' : 'italiano';
            const howMuch = {
                was: settings.coffee[model].limitsEmpty.ONE,
                take: settings.coffee[model].packages.ONE
            }

            if (was < settings.coffee[model].limitsEmpty.ONE) {
                howMuch.was = settings.coffee[model].limitsEmpty.TWO;
                howMuch.take = settings.coffee[model].packages.TWO;
            }

            if (was === settings.coffee[model].limitsEmpty.THREE) {
                howMuch.was = settings.coffee[model].limitsEmpty.THREE;
                howMuch.take = settings.coffee[model].packages.THREE;
            }

            writeValues(obj, howMuch);
        }

        function setMilk(obj) {
            const { max, was } = getMaxAndWas(obj);
            let isSmall = max <= settings.milk.small.MAX;

            const howMuch = {
                was: settings.milk.big.limitsEmpty.ONE,
                take: settings.milk.big.packages.ONE
            }

            if (!isSmall) {
                if (was < settings.milk.big.limitsEmpty.ONE) {
                    howMuch.was = settings.milk.big.limitsEmpty.TWO;
                    howMuch.take = settings.milk.big.packages.TWO;
                }

                if (was === settings.milk.big.limitsEmpty.THREE) {
                    howMuch.was = settings.milk.big.limitsEmpty.THREE;
                    howMuch.take = settings.milk.big.packages.THREE;
                }
            } else {
                howMuch.was = settings.milk.small.limitsEmpty.ONE;
                howMuch.take = settings.milk.small.packages.ONE;

                if (was === settings.milk.small.limitsEmpty.TWO) {
                    howMuch.was = settings.milk.small.limitsEmpty.TWO;
                    howMuch.take = settings.milk.small.packages.TWO;
                }
            }

            writeValues(obj, howMuch);
        }

        function setChocolate(obj) {
            const { was } = getMaxAndWas(obj);

            const howMuch = {
                was: settings.chocolate.limitsEmpty.ONE,
                take: settings.chocolate.packages.ONE
            }

            if (was < settings.chocolate.limitsEmpty.ONE && was >= settings.chocolate.limitsEmpty.TWO) {
                howMuch.was = settings.chocolate.limitsEmpty.TWO;
                howMuch.take = settings.chocolate.packages.TWO;
            }

            if (was < settings.chocolate.limitsEmpty.TWO) {
                howMuch.was = settings.chocolate.limitsEmpty.THREE;
                howMuch.take = settings.chocolate.packages.THREE;
            }

            if (was === settings.chocolate.limitsEmpty.FOUR) {
                howMuch.was = settings.chocolate.limitsEmpty.FOUR;
                howMuch.take = settings.chocolate.packages.FOUR;
            }

            writeValues(obj, howMuch);
        }

        function setShugar(obj) {
            const { was } = getMaxAndWas(obj);

            const howMuch = {
                was: settings.shugar.limitsEmpty.ONE,
                take: settings.EMPTY
            }

            if (was <= settings.shugar.limitsEmpty.ONE) {
                howMuch.was = settings.shugar.limitsEmpty.TWO;
                howMuch.take = settings.shugar.packages.ONE;
            }

            if (was === settings.shugar.limitsEmpty.THREE) {
                howMuch.was = settings.shugar.limitsEmpty.THREE;
                howMuch.take = settings.shugar.packages.TWO;
            }

            writeValues(obj, howMuch);
        }

        function setCups(obj) {
            const { was } = getMaxAndWas(obj);

            const howMuch = {
                was,
                take: settings.EMPTY
            }

            if (was <= settings.cups.limitsEmpty.ONE && was > settings.cups.limitsEmpty.TWO) {
                if (settings.cups.isRound) howMuch.was = settings.cups.packages.FIVE;
                howMuch.take = settings.cups.packages.ONE;
            }

            if (was <= settings.cups.limitsEmpty.TWO && was > settings.cups.limitsEmpty.THREE) {
                if (settings.cups.isRound) howMuch.was = settings.cups.packages.FOUR;
                howMuch.take = settings.cups.packages.TWO;
            }

            if (was <= settings.cups.limitsEmpty.THREE && was > settings.cups.limitsEmpty.FOUR) {
                if (settings.cups.isRound) howMuch.was = settings.cups.packages.THREE;
                howMuch.take = settings.cups.packages.THREE;
            }

            if (was <= settings.cups.limitsEmpty.FOUR && was > settings.cups.limitsEmpty.FIVE) {
                if (settings.cups.isRound) howMuch.was = settings.cups.packages.TWO;
                howMuch.take = settings.cups.packages.FOUR;
            }

            if (was <= settings.cups.limitsEmpty.FIVE) {
                if (settings.cups.isRound) howMuch.was = settings.cups.packages.ONE;
                howMuch.take = settings.cups.packages.FIVE;
            }

            if (was === settings.cups.limitsEmpty.SIX) {
                howMuch.was = settings.EMPTY;
                howMuch.take = settings.cups.packages.SIX;
            }

            writeValues(obj, howMuch);
        }

        function setLids(obj) {
            const { was } = getMaxAndWas(obj);

            const howMuch = {
                was: settings.lids.packages.ONE,
                take: settings.lids.packages.ONE
            }

            // if (was >= settings.lids.limitsEmpty.ONE) {
            //     howMuch.was = settings.lids.packages.TWO;
            //     howMuch.take = settings.EMPTY;
            // }

            if (was === settings.EMPTY) {
                howMuch.was = settings.EMPTY;
                howMuch.take = settings.lids.packages.TWO;
            }

            writeValues(obj, howMuch);
        }

        function setIngredients(obj) {
            const { max, was } = getMaxAndWas(obj);
            let isSmall = max <= settings.ingredients.small.MAX;

            const howMuch = {
                was: settings.ingredients.isRound ? roundToHondreds(was) : was,
                take: settings.EMPTY
            }

            if (!isSmall) {
                if (was <= settings.ingredients.big.limitsEmpty.ONE && was > settings.ingredients.big.limitsEmpty.TWO) {
                    howMuch.was = settings.ingredients.isRound ? roundToHondreds(was) : was;
                    howMuch.take = settings.ingredients.big.packages.ONE;
                }

                if (was <= settings.ingredients.big.limitsEmpty.TWO && was > settings.ingredients.big.limitsEmpty.THREE) {
                    howMuch.was = settings.ingredients.isRound ? roundToHondreds(was) : was;
                    howMuch.take = settings.ingredients.big.packages.TWO;
                }

                if (was === settings.ingredients.big.limitsEmpty.THREE) {
                    howMuch.was = settings.EMPTY;
                    howMuch.take = settings.ingredients.big.packages.THREE;
                }
            } else {
                if (was <= settings.ingredients.small.limitsEmpty.ONE && was > settings.ingredients.small.limitsEmpty.TWO) {
                    howMuch.was = settings.ingredients.isRound ? roundToHondreds(was) : was;
                    howMuch.take = settings.ingredients.small.packages.ONE;
                }

                if (was <= settings.ingredients.small.limitsEmpty.TWO && was > settings.ingredients.small.limitsEmpty.THREE) {
                    howMuch.was = settings.ingredients.isRound ? roundToHondreds(was) : was;
                    howMuch.take = settings.ingredients.small.packages.TWO;
                }

                if (was === settings.ingredients.small.limitsEmpty.THREE) {
                    howMuch.was = settings.EMPTY;
                    howMuch.take = settings.ingredients.small.packages.THREE;
                }
            }

            writeValues(obj, howMuch);
        }

        const nameMap = {
            'Вода': setWater,
            'Кофе Jardin': setCoffee,
            'Молоко': setMilk,
            'Шоколад': setChocolate,
            'Сахар сладкий': setShugar,
            'Стаканы': setCups,
            'Крышка': setLids,
            'Irish': setIngredients,
            'Сухое молоко МАЛИНА': setIngredients,
            'Toffee': setIngredients,
            'Апельсин': setIngredients
        }

        function writeTele(rows) {
            for (const ingrRow of rows) {
                const ingr = getWasAndTake(ingrRow);

                if (nameMap[ingr.name]) {
                    nameMap[ingr.name](ingr);
                }
            }
        }


        btn.addEventListener('click', function () {
            writeTele(inpRows);
            btn.remove();
        });

        return btn;
    }


    function onBtnReplaceClick() {
        const config = {
            childList: true,
            subtree: true,
        };

        const observer = new MutationObserver(function () {
            const btn = activateApp();
            document.body.append(btn);
            observer.disconnect();
        });

        observer.observe(document, config);

    }

    const btnRepl = document.querySelector('.button_replace');
    if (btnRepl) {
        btnRepl.addEventListener('click', onBtnReplaceClick);
    }
// }
