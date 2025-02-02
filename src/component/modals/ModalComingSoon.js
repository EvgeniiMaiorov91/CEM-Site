import {
    jsx,
    jsxFrag,
    setAction,
    setValue,
    makeDOM,
    getVariable,
    getStorage,
    getValue
} from '@betarost/cemjs';
import svg from "@assets/svg/index.js";

const showModalCommingSoon = function (e) {
    e.stopPropagation()
    setValue("modals", "commingSoonModalShow", !getValue("modals", "commingSoonModalShow"))
}

const ModalComingSoon = function ({ lang }) {
    // console.log("ModalComingSoon");
    const commingSoonModalShow = getValue("modals", "commingSoonModalShow")

    return (
        <div class="c-modal c-modal--open">
            <section class="c-modal__dialog">
                <header class="c-modal__header">
                    <h2 class="c-modal__title">Updating</h2>
                    <button
                        type="button"
                        class="c-modal__close"
                        onclick={showModalCommingSoon}
                    ></button>
                </header>  
                <div class="c-modal__body">
                    <p>Section under development</p>
                    <p>Coming soon</p>
                </div>
                <footer class="c-modal__footer">
                    <button class="c-button c-button--primary"
                    onclick={showModalCommingSoon}
                    >
                        <span>Закрыть</span>
                    </button>
                </footer>
            </section>
        </div>
    )
};


export { ModalComingSoon }