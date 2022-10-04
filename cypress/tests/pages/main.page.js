class MainPage {
    elements ={
        startUrl : () => cy.visit( 'https://telnyx.com/'),
        tryFreeButton : () => cy.get('[class="sc-5d3a275a-2 krPznm"]'),
        signUpUrl : () => cy.url().should('include', "/sign-up"),
        headerSignUp : () => cy.get('[href="/sign-up"]'),
        popupWindow : () => cy.get('button[aria-label="close and deny"]'),
        headerLogIn : () => cy.xpath('//*[@id="__next"]/div[1]/header/div[1]/div/div/a[2]'),
        createAccountButton : () => cy.get('[type="submit"]'),
        networkLink : () => cy.get('[href="/solutions/global-ip-network"]'),
        blogLink : () => cy.xpath('//*[@id="__next"]/div[1]/header/div[2]/div/div[2]/ul/li[4]/div/div/div[2]/div/div[3]/a/div/div[2]/span'),
        devDocsLink : () => cy.xpath('//*[@id="__next"]/div[1]/header/div[2]/div/div[2]/ul/li[4]/div/div/div[2]/div/div[1]/a/div/div[2]/span'),
        aboutCompanyLink : () => cy.xpath('//*[@id="__next"]/div[1]/header/div[2]/div/div[2]/ul/li[5]/div/div/div[2]/div/div[1]/a/div/div[2]/span'),
        partnersLink : () => cy.xpath('//*[@id="__next"]/div[1]/header/div[2]/div/div[2]/ul/li[5]/div/div/div[2]/div/div[3]/a/div/div[2]'),
        numberLookup : () => cy.xpath('//*[@id="__next"]/div[1]/header/div[2]/div/div[2]/ul/li[1]/div/div/div[2]/div[1]/div[5]/a/div/div[2]/span'),
        footerSignUp : () => cy.xpath('//*[@id="__next"]/div[1]/footer/div[1]/div/div[5]/div/ul/li[1]/a/span/span'),
        footerBlogLink : () => cy.xpath('//*[@id="__next"]/div[1]/footer/div[1]/div/div[2]/div/ul/li[2]/a/span/span'),
        programmableSMSfooter : () => cy.xpath('//*[@id="__next"]/div[1]/footer/div[1]/div/div[1]/div/ul/li[3]/a/span/span'),
        seeAllProducts : () => cy.xpath('//*[@id="__next"]/div[1]/footer/div[1]/div/div[1]/div/ul/li[10]/a/span/span'),
        dataPrivacyFooter : () => cy.xpath('//*[@id="__next"]/div[1]/footer/div[1]/div/div[4]/div/ul/li[3]/a')
        
       }

    clickTryFreeButton(){
        this.elements.tryFreeButton().click();
       }

    openStartPage() {
        this.elements.startUrl();
       }    

    chekSignUpUrl() {
        this.elements.signUpUrl;
       }

    signUpUrlPart() {
        return "/sign-up";
    }
    logInUrlPart() {
        return "/login/sign-in";
    }
    errorEmail() {
        return "#email_error";
    }
    errorName() {
        return "#full_name_error";
    }
    messaging() {
        return '#__next > div.sc-2e7b2fa9-0.eiIMbO > main > div.sc-c5cd90d8-0.fWvVUB > div > div.sc-93eced66-0.gpIxXu > div > ul:nth-child(4) > li';
    }
    voice() {
        return '#__next > div.sc-2e7b2fa9-0.eiIMbO > main > div.sc-c5cd90d8-0.fWvVUB > div > div.sc-93eced66-0.gpIxXu > div > ul:nth-child(2) > li';
    }
    

    clickHeaderSignUp(){
        this.elements.headerSignUp().first().click({force: true});
       }
    
    closePopupWindow(){
        this.elements.popupWindow().click();
       }
    clickHeaderLogIn(){
        this.elements.headerLogIn().click();
       }
    clickCreateAccountButton(){
        this.elements.createAccountButton().click();
       }
    clickNetworkLink(){
        this.elements.networkLink().first().click({force: true})
       }
    clickBlogLink(){
        this.elements.blogLink().click({force: true})
       }
    clickDevDocsLink(){
        this.elements.devDocsLink().click({force: true})
       }
    clickAboutCompanyLink(){
        this.elements.aboutCompanyLink().click({force: true})
       }
    clickPartnersLink(){
        this.elements.partnersLink().click({force: true})
       }
    clickNumberLookup(){
        this.elements.numberLookup().click({force: true})
    }
    clickFooterSignUp(){
        this.elements.footerSignUp().first().click({force: true});
       }
    clickFooterBlogLink(){
        this.elements.footerBlogLink().click()
       }
    clickSmsFooter(){
        this.elements.programmableSMSfooter().click()
       }
    clickAllProducts(){
        this.elements.seeAllProducts().click()
    }
    clickDataPrivacyFooter(){
        this.elements.dataPrivacyFooter().click()
       }

       // getHeaderSections() {
    //     return '[class="sc-14c941d7-4 jgxzDd"] > li';
    // }

    // getHeader() {
    //     return 'header';
    // }

    // getTitle() {
    //     return 'title';
    // }

    // getEmail() {
    //     return 'input[type="email"]';
    // }

    // getSignupHeader() {
    //     return '[href="/sign-up"';
    // }

    // getSignupFooter() {
    //     return '//*[@id="__next"]/div[1]/footer/div[1]/div/div[5]/div/ul/li[1]/a/span/span';
    // }

    // getLoginHeader() {
    //     return '//*[@id="__next"]/div[1]/header/div[1]/div/div/a[2]';
    // }

}
require("cypress-xpath")
module.exports = new MainPage()