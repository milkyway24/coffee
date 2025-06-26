const currentUrl = window.location.href;
const substringToCheck = "rtvmcloading_m";

if (currentUrl.includes(substringToCheck)) {
    const modal = document.createElement('div');

    function showLoading() {
        const modalText = document.createElement('span');
        const styles = {
            position: 'fixed',
            top: '0',
            left: '',
            width: '100%',
            height: '100%',
            zIndex: '10000',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            fontSize: '16px',
            color: '#ffffff',
            backgroundColor: 'rgba(0, 0, 0, 0.7)'
        };

        applyStyles(modal, styles);

        modalText.textContent = 'Загрузка автозаполнения...';
        modal.append(modalText);

        document.body.append(modal);
        document.body.style.overflow = 'hidden';
    }

    function hideLoaing() {
        modal.style.display = 'none';
        document.body.style.overflow = '';
    }

    function loadScript(src, callback) {
        showLoading();
        const script = document.createElement('script');
        script.src = src;
        script.addEventListener("load", callback);
        document.body.append(script);
    }

    function applyStyles(element, styles) {
        for (const property in styles) {
            if (styles.hasOwnProperty(property)) {
                element.style[property] = styles[property];
            }
        }
    }

    loadScript('https://milkyway24.github.io/coffee/auto-script-rounded.js', function () {
        hideLoaing();
    });
}