document.addEventListener("DOMContentLoaded", (event) => {

    const currentUrl = window.location.href;
    const substringToCheck = "rtvmcloading_m";

    if (currentUrl.includes(substringToCheck)) {

        function applyStyles(element, styles) {
            for (const property in styles) {
                if (styles.hasOwnProperty(property)) {
                    element.style[property] = styles[property];
                }
            }
        }

        const btn = document.createElement('button');
        btn.textContent = 'Заполнить';
        const styles = {
            color: '#ffffff',
            backgroundColor: '#2aa9bf',
            padding: '10px',
            borderRadius: '5px',
            position: 'fixed',
            top: '50px',
            left: '50%',
            border: '2px solid #27778a',
            fontSize: '16px',
            fontWeight: 'bold'
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

            return {
                name,
                max,
                was,
                take
            }
        }

        function roundToHondreds(num) {
            return Math.floor(num / 100) * 100;
        }

        const nameMap = {
            'Вода': function (obj) {
                if (Number(obj.max.textContent) > 38) {
                    if (Number(obj.was.textContent) === 0) {
                        obj.was.textContent = 0;
                        obj.take.textContent = '+57';
                    } else if (Number(obj.was.textContent) > 37) {
                        obj.was.textContent = 38;
                        obj.take.textContent = '+19';
                    } else {
                        obj.was.textContent = 19;
                        obj.take.textContent = '+38';
                    }
                } else {
                    if (Number(obj.was.textContent) === 0) {
                        obj.was.textContent = 0;
                        obj.take.textContent = '+38';
                    } else {
                        obj.was.textContent = 19;
                        obj.take.textContent = '+19';
                    }
                }
            },

            'Кофе Jardin': function (obj) {
                if (Number(obj.max.textContent) > 2750) {
                    if (Number(obj.was.textContent) >= 2000) {
                        obj.was.textContent = 2000;
                        obj.take.textContent = '+1000';
                    }

                    if (Number(obj.was.textContent) < 2000) {
                        obj.was.textContent = 1000;
                        obj.take.textContent = '+2000';
                    }

                    if (Number(obj.was.textContent) === 0) {
                        obj.was.textContent = 0;
                        obj.take.textContent = '+3000';
                    }

                } else {
                    if (Number(obj.was.textContent) >= 1750) {
                        obj.was.textContent = 1750;
                        obj.take.textContent = '+1000';
                    }

                    if (Number(obj.was.textContent) < 1750) {
                        obj.was.textContent = 750;
                        obj.take.textContent = '+2000';
                    }

                    if (Number(obj.was.textContent) === 0) {
                        obj.was.textContent = 0;
                        obj.take.textContent = '+2750';
                    }
                }
            },

            'Молоко': function (obj) {
                if (Number(obj.was.textContent) >= 1500) {
                    obj.was.textContent = 1500;
                    obj.take.textContent = '+1000';
                }

                if (Number(obj.was.textContent) < 1500) {
                    obj.was.textContent = 500;
                    obj.take.textContent = '+2000';
                }

                if (Number(obj.was.textContent) === 0) {
                    obj.was.textContent = 0;
                    obj.take.textContent = '+2500';
                }
            },

            'Шоколад': function (obj) {
                if (Number(obj.was.textContent) > 1500) {
                    obj.was.textContent = 1500;
                    obj.take.textContent = '+500';
                }

                if (Number(obj.was.textContent) < 1500 && Number(obj.was.textContent) >= 1000) {
                    obj.was.textContent = 1000;
                    obj.take.textContent = '+1000';
                }

                if (Number(obj.was.textContent) < 1000) {
                    obj.was.textContent = 500;
                    obj.take.textContent = '+1500';
                }

                if (Number(obj.was.textContent) === 0) {
                    obj.was.textContent = 0;
                    obj.take.textContent = '+2000';
                }
            },

            'Сахар сладкий': function (obj) {
                if (Number(obj.was.textContent) > 1000) {
                    obj.was.textContent = roundToHondreds(Number(obj.was.textContent));
                    obj.take.textContent = '+0';
                }

                if (Number(obj.was.textContent) < 1000) {
                    obj.was.textContent = 500;
                    obj.take.textContent = '+1000';
                }

                if (Number(obj.was.textContent) === 0) {
                    obj.was.textContent = 0;
                    obj.take.textContent = '+1500';
                }
            },

            'Крышка': function (obj) {
                if (Number(obj.was.textContent) > 100) {
                    obj.was.textContent = 200;
                    obj.take.textContent = '+0';
                }

                if (Number(obj.was.textContent) < 100) {
                    obj.was.textContent = 100;
                    obj.take.textContent = '+100';
                }

                if (Number(obj.was.textContent) === 0) {
                    obj.was.textContent = 0;
                    obj.take.textContent = '+200';
                }
            },

            'Irish': function (obj) {
                if (Number(obj.max.textContent) > 2500) {
                  
                    if (Number(obj.was.textContent) > 2400) {
                        obj.was.textContent = roundToHondreds(Number(obj.was.textContent));
                        obj.take.textContent = '+0';
                    }

                    if (Number(obj.was.textContent) < 2400 && Number(obj.was.textContent) >= 1500) {
                        obj.was.textContent = roundToHondreds(Number(obj.was.textContent));
                        obj.take.textContent = '+1000';
                    }

                    if (Number(obj.was.textContent) < 1500 && Number(obj.was.textContent) >= 600) {
                        obj.was.textContent = roundToHondreds(Number(obj.was.textContent));
                        obj.take.textContent = '+2000';
                    }

                    if (Number(obj.was.textContent) < 600 && Number(obj.was.textContent) > 0) {
                        obj.was.textContent = 1000;
                        obj.take.textContent = '+2000';
                    }

                    if (Number(obj.was.textContent) === 0) {
                        obj.was.textContent = 0;
                        obj.take.textContent = '+3000';
                    }
                } else {
                    if (Number(obj.was.textContent) > 1900) {
                        obj.was.textContent = roundToHondreds(Number(obj.was.textContent));
                        obj.take.textContent = '+0';
                    }

                    if (Number(obj.was.textContent) < 1900 && Number(obj.was.textContent) >= 900) {
                        obj.was.textContent = roundToHondreds(Number(obj.was.textContent));
                        obj.take.textContent = '+1000';
                    }

                    if (Number(obj.was.textContent) < 900 && Number(obj.was.textContent) > 0) {
                        obj.was.textContent = 500;
                        obj.take.textContent = '+2000';
                    }

                    if (Number(obj.was.textContent) === 0) {
                        obj.was.textContent = 0;
                        obj.take.textContent = '+2500';
                    }
                }
            },

            'Сухое молоко МАЛИНА': function (obj) {
                if (Number(obj.max.textContent) > 2500) {
                    if (Number(obj.was.textContent) > 2400) {
                        obj.was.textContent = roundToHondreds(Number(obj.was.textContent));
                        obj.take.textContent = '+0';
                    }

                    if (Number(obj.was.textContent) < 2400 && Number(obj.was.textContent) >= 1500) {
                        obj.was.textContent = roundToHondreds(Number(obj.was.textContent));
                        obj.take.textContent = '+1000';
                    }

                    if (Number(obj.was.textContent) < 1500 && Number(obj.was.textContent) >= 600) {
                        obj.was.textContent = roundToHondreds(Number(obj.was.textContent));
                        obj.take.textContent = '+2000';
                    }

                    if (Number(obj.was.textContent) < 600 && Number(obj.was.textContent) > 0) {
                        obj.was.textContent = 1000;
                        obj.take.textContent = '+2000';
                    }

                    if (Number(obj.was.textContent) === 0) {
                        obj.was.textContent = 0;
                        obj.take.textContent = '+3000';
                    }
                } else {
                    if (Number(obj.was.textContent) > 1900) {
                        obj.was.textContent = roundToHondreds(Number(obj.was.textContent));
                        obj.take.textContent = '+0';
                    }

                    if (Number(obj.was.textContent) < 1900 && Number(obj.was.textContent) >= 900) {
                        obj.was.textContent = roundToHondreds(Number(obj.was.textContent));
                        obj.take.textContent = '+1000';
                    }

                    if (Number(obj.was.textContent) < 900 && Number(obj.was.textContent) > 0) {
                        obj.was.textContent = 500;
                        obj.take.textContent = '+2000';
                    }

                    if (Number(obj.was.textContent) === 0) {
                        obj.was.textContent = 0;
                        obj.take.textContent = '+2500';
                    }
                }
            },

            'Toffee': function (obj) {
                if (Number(obj.max.textContent) > 2500) {
                    if (Number(obj.was.textContent) > 2400) {
                        obj.was.textContent = roundToHondreds(Number(obj.was.textContent));
                        obj.take.textContent = '+0';
                    }

                    if (Number(obj.was.textContent) < 2400 && Number(obj.was.textContent) >= 1500) {
                        obj.was.textContent = roundToHondreds(Number(obj.was.textContent));
                        obj.take.textContent = '+1000';
                    }

                    if (Number(obj.was.textContent) < 1500 && Number(obj.was.textContent) >= 600) {
                        obj.was.textContent = roundToHondreds(Number(obj.was.textContent));
                        obj.take.textContent = '+2000';
                    }

                    if (Number(obj.was.textContent) < 600 && Number(obj.was.textContent) > 0) {
                        obj.was.textContent = 1000;
                        obj.take.textContent = '+2000';
                    }

                    if (Number(obj.was.textContent) === 0) {
                        obj.was.textContent = 0;
                        obj.take.textContent = '+3000';
                    }
                } else {
                    if (Number(obj.was.textContent) > 1900) {
                        obj.was.textContent = roundToHondreds(Number(obj.was.textContent));
                        obj.take.textContent = '+0';
                    }

                    if (Number(obj.was.textContent) < 1900 && Number(obj.was.textContent) >= 900) {
                        obj.was.textContent = roundToHondreds(Number(obj.was.textContent));
                        obj.take.textContent = '+1000';
                    }

                    if (Number(obj.was.textContent) < 900 && Number(obj.was.textContent) > 0) {
                        obj.was.textContent = 500;
                        obj.take.textContent = '+2000';
                    }

                    if (Number(obj.was.textContent) === 0) {
                        obj.was.textContent = 0;
                        obj.take.textContent = '+2500';
                    }
                }
            },

            'Апельсин': function (obj) {
                if (Number(obj.max.textContent) > 2500) {
                    if (Number(obj.was.textContent) > 2400) {
                        obj.was.textContent = roundToHondreds(Number(obj.was.textContent));
                        obj.take.textContent = '+0';
                    }

                    if (Number(obj.was.textContent) < 2400 && Number(obj.was.textContent) >= 1500) {
                        obj.was.textContent = roundToHondreds(Number(obj.was.textContent));
                        obj.take.textContent = '+1000';
                    }

                    if (Number(obj.was.textContent) < 1500 && Number(obj.was.textContent) >= 600) {
                        obj.was.textContent = roundToHondreds(Number(obj.was.textContent));
                        obj.take.textContent = '+2000';
                    }

                    if (Number(obj.was.textContent) < 600 && Number(obj.was.textContent) > 0) {
                        obj.was.textContent = 1000;
                        obj.take.textContent = '+2000';
                    }

                    if (Number(obj.was.textContent) === 0) {
                        obj.was.textContent = 0;
                        obj.take.textContent = '+3000';
                    }
                } else {
                    if (Number(obj.was.textContent) > 1900) {
                        obj.was.textContent = roundToHondreds(Number(obj.was.textContent));
                        obj.take.textContent = '+0';
                    }

                    if (Number(obj.was.textContent) < 1900 && Number(obj.was.textContent) >= 900) {
                        obj.was.textContent = roundToHondreds(Number(obj.was.textContent));
                        obj.take.textContent = '+1000';
                    }

                    if (Number(obj.was.textContent) < 900 && Number(obj.was.textContent) > 0) {
                        obj.was.textContent = 500;
                        obj.take.textContent = '+2000';
                    }

                    if (Number(obj.was.textContent) === 0) {
                        obj.was.textContent = 0;
                        obj.take.textContent = '+2500';
                    }
                }
            }
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

        document.body.append(btn);
    }
});
