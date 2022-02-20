describe('Testing translation into different languages', () => {
    //checking how element's names of Header and Category menus 
    //are translated into different languages 

    it('Testing translation into German', () => {
        //verification of correct translation 
        //of Header and Category menu element's names
        //into German

        cy.visit('https://playsstar.com/worldwide/aisad-ob-ge');

        //verification of Category menu's elements

        //"Disclaimer" should be "Haftungsausschluss"
        cy.get("li[id='menu-item-1819']")
            .children('a')
            .first()
            .should('have.text', 'Haftungsausschluss');

        //"Privacy Policy" should be "Datenschutzbestimmungen"  
        cy.get("li[id='menu-item-1818']")
            .children('a')
            .first()
            .should('have.text', 'Datenschutzbestimmungen');

        //"Adverteise With Us" should be "Werben sie mit uns"  
        cy.get("li[id='menu-item-1820']")
            .children('a')
            .first()
            .should('have.text', 'Werben sie mit uns');

        //"impressum" should be "Impressum"  
        cy.get("li[id='menu-item-9785']")
            .children('a')
            .first()
            .should('have.text', 'Impressum');

        //verification of Header menu's elements

        //"Health" should be "Gesundheit"
        cy.get("li[id='menu-item-1248']")
            .children('a')
            .first()
            .should('have.text', 'Gesundheit');

        //"Fitness" should be "Fitness"
        cy.get("li[id='menu-item-1246']")
            .children('a')
            .first()
            .should('have.text', 'Fitness');

        //"Sports" should be "Sport"
        cy.get("li[id='menu-item-6313']")
            .children('a')
            .first()
            .should('have.text', 'Sport');

    });

    it('Testing translation into Partugal', () => {
        //verification of correct translation 
        //of Header and Category menus element's names
        //into Partugal

        cy.visit('https://playsstar.com/worldwide/agedif-ob-pr');

        //verification of Category menu's elements

        //"Disclaimer" should be "Isenção de Responsabilidade"
        cy.get("li[id='menu-item-1819']")
            .children('a')
            .first()
            .should('have.text', 'Isenção de Responsabilidade');

        //"Privacy Policy" should be "Política de Privacidade"  
        cy.get("li[id='menu-item-1818']")
            .children('a')
            .first()
            .should('have.text', 'Política de Privacidade');

        //"Adverteise With Us" should be "Anuncie Conosco"  
        cy.get("li[id='menu-item-1820']")
            .children('a')
            .first()
            .should('have.text', 'Anuncie Conosco');

        //"impressum" should be "Impressum"  
        cy.get("li[id='menu-item-9785']")
            .children('a')
            .first()
            .should('have.text', 'Impressum');

        //verification of Header menu's elements

        //"Health" should be "Saúde"
        cy.get("li[id='menu-item-1248']")
            .children('a')
            .first()
            .should('have.text', 'Saúde');

        //"Fitness" should be "Fitness"
        cy.get("li[id='menu-item-1246']")
            .children('a')
            .first()
            .should('have.text', 'Fitness');

        //"Sports" should be "Esportes"
        cy.get("li[id='menu-item-6313']")
            .children('a')
            .first()
            .should('have.text', 'Esportes');

    });

    it('Testing translation into Korean', () => {
        //verification of correct translation 
        //of Header and Category menus element's names
        //into Korean

        cy.visit('https://playsstar.com/worldwide/babies-ob-ko');

        //verification of Category menu's elements

        //"Disclaimer" should be "면책"
        cy.get("li[id='menu-item-1819']")
            .children('a')
            .first()
            .should('have.text', '면책');

        //"Privacy Policy" should be "개인정보처리방침"  
        cy.get("li[id='menu-item-1818']")
            .children('a')
            .first()
            .should('have.text', '개인정보처리방침');

        //"Adverteise With Us" should be "광고 제휴 문의"  
        cy.get("li[id='menu-item-1820']")
            .children('a')
            .first()
            .should('have.text', '광고 제휴 문의');

        //"impressum" should be "발행"  
        cy.get("li[id='menu-item-9785']")
            .children('a')
            .first()
            .should('have.text', '발행');

        //verification of Header menu's elements

        //"Health" should be "건강"
        cy.get("li[id='menu-item-1248']")
            .children('a')
            .first()
            .should('have.text', '건강');

        //"Fitness" should be "피트니스"
        cy.get("li[id='menu-item-1246']")
            .children('a')
            .first()
            .should('have.text', '피트니스');

        //"Sports" should be "스포츠"
        cy.get("li[id='menu-item-6313']")
            .children('a')
            .first()
            .should('have.text', '스포츠');

    });

    it('Testing translation into Spanish', () => {
        //verification of correct translation 
        //of Header and Category menus element's names
        //into Spanish

        cy.visit('https://playsstar.com/worldwide/actsp-ob-sp');

        //verification of Category menu's elements

        //"Disclaimer" should be "Descargo de responsabilidad"
        cy.get("li[id='menu-item-1819']")
            .children('a')
            .first()
            .should('have.text', 'Descargo de responsabilidad');

        //"Privacy Policy" should be "Política de Privacidad"  
        cy.get("li[id='menu-item-1818']")
            .children('a')
            .first()
            .should('have.text', 'Política de Privacidad');

        //"Adverteise With Us" should be "Anúnciate con nosotros"  
        cy.get("li[id='menu-item-1820']")
            .children('a')
            .first()
            .should('have.text', 'Anúnciate con nosotros');

        //"impressum" should be "Publicación"  
        cy.get("li[id='menu-item-9785']")
            .children('a')
            .first()
            .should('have.text', 'Publicación');

        //verification of Header menu's elements

        //"Health" should be "Salud"
        cy.get("li[id='menu-item-1248']")
            .children('a')
            .first()
            .should('have.text', 'Salud');

        //"Fitness" should be "Fitness"
        cy.get("li[id='menu-item-1246']")
            .children('a')
            .first()
            .should('have.text', 'Fitness');

        //"Sports" should be "Deportes"
        cy.get("li[id='menu-item-6313']")
            .children('a')
            .first()
            .should('have.text', 'Deportes');

    });
    
    it('Testing translation into Dutch', () => {
        //verification of correct translation 
        //of Header and Category menus element's names
        //into Dutch)

        cy.visit('https://playsstar.com/worldwide/airfor-ob-du');

        //verification of Category menu's elements

        //"Disclaimer" should be "Disclaimer"
        cy.get("li[id='menu-item-1819']")
            .children('a')
            .first()
            .should('have.text', 'Disclaimer');

        //"Privacy Policy" should be "Privacybeleid"  
        cy.get("li[id='menu-item-1818']")
            .children('a')
            .first()
            .should('have.text', 'Privacybeleid');

        //"Adverteise With Us" should be "Adverteer bij ons"  
        cy.get("li[id='menu-item-1820']")
            .children('a')
            .first()
            .should('have.text', 'Adverteer bij ons');

        //"impressum" should be "Impressum"  
        cy.get("li[id='menu-item-9785']")
            .children('a')
            .first()
            .should('have.text', 'Impressum');

        //verification of Header menu's elements

        //"Health" should be "Gezondheid"
        cy.get("li[id='menu-item-1248']")
            .children('a')
            .first()
            .should('have.text', 'Gezondheid');

        //"Fitness" should be "Fitness"
        cy.get("li[id='menu-item-1246']")
            .children('a')
            .first()
            .should('have.text', 'Fitness');

        //"Sports" should be "Sport"
        cy.get("li[id='menu-item-6313']")
            .children('a')
            .first()
            .should('have.text', 'Sport');

    });

    it('Testing translation into Turkish', () => {
        //verification of correct translation 
        //of Header and Category menus element's names
        //into Turkish

        cy.visit('https://playsstar.com/worldwide/baboom-ob-tu');

        //verification of Category menu's elements

        //"Disclaimer" should be "Feragat Etmek"
        cy.get("li[id='menu-item-1819']")
            .children('a')
            .first()
            .should('have.text', 'Feragat Etmek');

        //"Privacy Policy" should be "Gizlilik Politikası"  
        cy.get("li[id='menu-item-1818']")
            .children('a')
            .first()
            .should('have.text', 'Gizlilik Politikası');

        //"Adverteise With Us" should be "Bizimle Tanıtın"  
        cy.get("li[id='menu-item-1820']")
            .children('a')
            .first()
            .should('have.text', 'Bizimle Tanıtın');

        //"impressum" should be "Yasal Uyarı"  
        cy.get("li[id='menu-item-9785']")
            .children('a')
            .first()
            .should('have.text', 'Yasal Uyarı');

        //verification of Header menu's elements

        //"Health" should be "Sağlık"
        cy.get("li[id='menu-item-1248']")
            .children('a')
            .first()
            .should('have.text', 'Sağlık');

        //"Fitness" should be "Fitness"
        cy.get("li[id='menu-item-1246']")
            .children('a')
            .first()
            .should('have.text', 'Fitness');

        //"Sports" should be "Spor"
        cy.get("li[id='menu-item-6313']")
            .children('a')
            .first()
            .should('have.text', 'Spor');

    });

    it('Testing translation into Fransh', () => {
        //verification of correct translation 
        //of Header and Category menus element's names
        //into Fransh

        cy.visit('https://playsstar.com/worldwide/bagoff-ob-fr');

        //verification of Category menu's elements

        //"Disclaimer" should be "Avertissement"
        cy.get("li[id='menu-item-1819']")
            .children('a')
            .first()
            .should('have.text', 'Avertissement');

        //"Privacy Policy" should be "Politique de Confidentialité"  
        cy.get("li[id='menu-item-1818']")
            .children('a')
            .first()
            .should('have.text', 'Politique de Confidentialité');

        //"Adverteise With Us" should be "Faites votre Pub"  
        cy.get("li[id='menu-item-1820']")
            .children('a')
            .first()
            .should('have.text', 'Faites votre Pub');

        //"impressum" should be "Impressum"  
        cy.get("li[id='menu-item-9785']")
            .children('a')
            .first()
            .should('have.text', 'Impressum');

        //verification of Header menu's elements

        //"Health" should be "Santé"
        cy.get("li[id='menu-item-1248']")
            .children('a')
            .first()
            .should('have.text', 'Santé');

        //"Fitness" should be "Fitness"
        cy.get("li[id='menu-item-1246']")
            .children('a')
            .first()
            .should('have.text', 'Fitness');

        //"Sports" should be "Sport"
        cy.get("li[id='menu-item-6313']")
            .children('a')
            .first()
            .should('have.text', 'Sport');

    });

    it('Testing translation into Polish', () => {
        //verification of correct translation 
        //of Header and Category menus element's names
        //into Polish

        cy.visit('https://playsstar.com/worldwide/baboom-ob-po');

        //verification of Category menu's elements

        //"Disclaimer" should be "Zrezygnuj"
        cy.get("li[id='menu-item-1819']")
            .children('a')
            .first()
            .should('have.text', 'Zrezygnuj');

        //"Privacy Policy" should be "Polityka prywatności"  
        cy.get("li[id='menu-item-1818']")
            .children('a')
            .first()
            .should('have.text', 'Polityka prywatności');

        //"Adverteise With Us" should be "Reklamuj u nas"  
        cy.get("li[id='menu-item-1820']")
            .children('a')
            .first()
            .should('have.text', 'Reklamuj u nas');

        //"impressum" should be "Impressum"  
        cy.get("li[id='menu-item-9785']")
            .children('a')
            .first()
            .should('have.text', 'Impressum');

        //verification of Header menu's elements

        //"Health" should be "Zdrowie"
        cy.get("li[id='menu-item-1248']")
            .children('a')
            .first()
            .should('have.text', 'Zdrowie');

        //"Fitness" should be "Fitness"
        cy.get("li[id='menu-item-1246']")
            .children('a')
            .first()
            .should('have.text', 'Fitness');

        //"Sports" should be "Sporty"
        cy.get("li[id='menu-item-6313']")
            .children('a')
            .first()
            .should('have.text', 'Sporty');

    });

    it('Testing translation into Japanice', () => {
        //verification of correct translation 
        //of Header and Category menus element's names
        //into Japanice

        cy.visit('https://playsstar.com/worldwide/aisad-ob-jp');

        //verification of Category menu's elements

        //"Disclaimer" should be "免責事項"
        cy.get("li[id='menu-item-1819']")
            .children('a')
            .first()
            .should('have.text', '免責事項');

        //"Privacy Policy" should be "プライバシーポリシー"  
        cy.get("li[id='menu-item-1818']")
            .children('a')
            .first()
            .should('have.text', 'プライバシーポリシー');

        //"Adverteise With Us" should be "広告掲載について"  
        cy.get("li[id='menu-item-1820']")
            .children('a')
            .first()
            .should('have.text', '広告掲載について');

        //"impressum" should be "印象"  
        cy.get("li[id='menu-item-9785']")
            .children('a')
            .first()
            .should('have.text', '印象');

        //verification of Header menu's elements

        //"Health" should be "健康"
        cy.get("li[id='menu-item-1248']")
            .children('a')
            .first()
            .should('have.text', '健康');

        //"Fitness" should be "フィットネス"
        cy.get("li[id='menu-item-1246']")
            .children('a')
            .first()
            .should('have.text', 'フィットネス');

        //"Sports" should be "スポーツ"
        cy.get("li[id='menu-item-6313']")
            .children('a')
            .first()
            .should('have.text', 'スポーツ');

    });

    it('Testing translation into Italian', () => {
        //verification of correct translation 
        //of Header and Category menus element's names
        //into Italian

        cy.visit('https://playsstar.com/worldwide/altar-ob-it');

        //verification of Category menu's elements

        //"Disclaimer" should be "Smentita"
        cy.get("li[id='menu-item-1819']")
            .children('a')
            .first()
            .should('have.text', 'Smentita');

        //"Privacy Policy" should be "Informativa sulla Privacy"  
        cy.get("li[id='menu-item-1818']")
            .children('a')
            .first()
            .should('have.text', 'Informativa sulla Privacy');

        //"Adverteise With Us" should be "Pubblicizzare con noi"  
        cy.get("li[id='menu-item-1820']")
            .children('a')
            .first()
            .should('have.text', 'Pubblicizzare con noi');

        //"impressum" should be "Imprimere"  
        cy.get("li[id='menu-item-9785']")
            .children('a')
            .first()
            .should('have.text', 'Imprimere');

        //verification of Header menu's elements

        //"Health" should be "Salute"
        cy.get("li[id='menu-item-1248']")
            .children('a')
            .first()
            .should('have.text', 'Salute');

        //"Fitness" should be "Fitness"
        cy.get("li[id='menu-item-1246']")
            .children('a')
            .first()
            .should('have.text', 'Fitness');

        //"Sports" should be "Sport"
        cy.get("li[id='menu-item-6313']")
            .children('a')
            .first()
            .should('have.text', 'Sport');

    });
});
