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
import images from "@assets/images/index.js";
import { PartnerItem } from '@component/element/PartnerItem.js';

const BlockInfoPartners = function ({ lang, partners }) {

    return (
        <div class="top_professionals c-infopartners">
            <h2 class="c-infopartners__title">{lang.h.partners}</h2>
            <div data-mainpage="true" class="c-infopartners__list partners_container">
                {
                    partners.map(function (partner) {
                        return (
                            <PartnerItem lang={lang} partner={partner} />
                        )
                    })
                }
            </div>
            <a href="partners/" class="c-infopartners__more btn-view-all-a" data-action="link">
                <div class="btn-view-all more_partners">
                    <div>{lang.button.allPartners}</div>
                </div>
            </a>
        </div>
    )
}

export { BlockInfoPartners }