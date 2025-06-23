// Версия 23.06.2025 14:25

const currentUrl = window.location.href;
const substringToCheck = "rtvmcloading_m";

if (currentUrl.includes(substringToCheck)) {

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
            boxShadow: '0 0 10px #80808047'
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
                if (Number(obj.max.textContent) > 1500) {
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
                } else {
                    if (Number(obj.was.textContent) > 0) {
                        obj.was.textContent = 500;
                        obj.take.textContent = '+1000';
                    } else {
                        obj.was.textContent = 0;
                        obj.take.textContent = '+1500';
                    }
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

            'Стаканы': function (obj) {
                if (Number(obj.was.textContent) >= 180) {
                    obj.take.textContent = '+40';
                }

                if (Number(obj.was.textContent) < 180 && Number(obj.was.textContent) >= 140) {
                    obj.take.textContent = '+80';
                }

                if (Number(obj.was.textContent) < 140 && Number(obj.was.textContent) >= 100) {
                    obj.take.textContent = '+120';
                }

                if (Number(obj.was.textContent) < 100 && Number(obj.was.textContent) >= 60) {
                    obj.take.textContent = '+160';
                }

                if (Number(obj.was.textContent) === 0) {
                    obj.was.textContent = 0;
                    obj.take.textContent = '+200';
                }
            },

            'Крышка': function (obj) {
                if (Number(obj.was.textContent) > 150) {
                    obj.was.textContent = 200;
                    obj.take.textContent = '+0';
                }

                if (Number(obj.was.textContent) < 150) {
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
    btnRepl.addEventListener('click', onBtnReplaceClick);
}
