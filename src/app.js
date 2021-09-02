import { LightningElement } from "lwc";

export default class App extends LightningElement {
	showBackToTop = false;
	scrollToTop(){
		let knowledgeWidgetElement = this.template.querySelector('.top-most-div')
		knowledgeWidgetElement.scrollTop=0;
	}

  onScroll () {
		let mydiv = this.template.querySelector('.top-most-div')
		if (mydiv.scrollTop > 40) {
			this.showBackToTop = true;
		}
		else {
			this.showBackToTop = false;
		}
	}
}
