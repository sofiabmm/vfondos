const puppeteer = require('puppeteer');

let clientes = [
    '27308022701',
    // '27002166912',
    // '27257429038',
    // '20079885127'

    
]

let max = 4999999
let min = 1000

clientes.forEach(cliente => {
    
    let soli= 
    
        (async () => {
            const browser = await puppeteer.launch({ headless: false});
            const page = await browser.newPage();
            try{       
                await page.goto('https://app-qa.bancorfondos.com.ar/769_VFNet/frwWndAuthLogin.aspx?ReturnUrl=%2f769_VFNet%2ffrwLinkRedirector.aspx');
            }catch{
                await browser.close();
           }
            await page.type('#ctl00_ContentPlaceHolder_txtUsuario','e30327115')
            await page.type('#ctl00_ContentPlaceHolder_txtPassword','Bancor123')
            await page.click('#ctl00_ContentPlaceHolder_cmdIngresar') 
            //Seleciono cpt por defecto
            await page.waitForSelector('#ctl00_ContentPlaceHolder_CTA_default_l')
            await page.click('#ctl00_ContentPlaceHolder_CTA_default_l')
            //espero q venga el selector
            await page.waitForTimeout(5000)
        
            const frame = await page.frames().find(frame => frame.name() === 'popUpFrame');
            
            await frame.waitForSelector('#butcboTpDocIdentidad')
            await frame.click('#butcboTpDocIdentidad')
            await page.waitForTimeout(3000)
            // tipo de documento
            // cuil
            await frame.click('#grdcboTpDocIdentidad_2 > td:nth-child(2)')
            
            await frame.type('#txttxtNumDocumento', cliente)
            await page.waitForTimeout(3000)
            await frame.click('#PER_acc_find')
            await frame.waitForSelector('#grillaCuotaPartistas > tbody > tr:nth-child(1) > th:nth-child(1)')
            await frame.click('#seleccion#seleccion')
            await page.waitForTimeout(3000)
            // await page.click('#ctl00_ContentPlaceHolder_Menu > table:nth-child(3) > tbody > tr > td:nth-child(2)')
            await page.click('#ctl00_ContentPlaceHolder_Menu > table:nth-child(2) > tbody > tr > td:nth-child(2)')
            await page.waitForSelector('#SOLSUS_cell')
            await page.click('#SOLSUS_cell')
        
            await page.waitForTimeout(5000)
            
            let pages = await browser.pages();
            
            const page2 = await pages[2]
            await page2.waitForSelector('#celllblctl01Agregar')
            await page2.click('#celllblctl01Agregar')
            await page.waitForTimeout(3000)
            
            pages = await browser.pages();
            let page3 = await pages[3]
            await page.waitForTimeout(3000)
        
            await page3.click('#pnlSolSuscNew > div:nth-child(2) > div')
         
            await page3.waitForTimeout(3000)
            pages = await browser.pages();
           
            const page4 = await pages[4]
            await page.waitForTimeout(3000)
        
            await page4.click('#butcboTpValorCp')
            await page4.waitForTimeout(3000)
            // selecciona fondo
            // clase a
            await page4.click('#grdcboTpValorCp_0 > td:nth-child(3)')
    
            
            await page4.waitForTimeout(3000)
            await page4.click('#butcboOficialCta')
            await page4.waitForTimeout(3000)
            await page4.click('#grdcboOficialCta_0 > td:nth-child(5)')
            await page4.waitForTimeout(3000)
            await page4.click('#celllblIdx_cmdAceptarIdx_cmdAceptar')
        
           page3 = await pages[3]
           await page3.waitForTimeout(5000)
           await page3.click('#lblTituloPagos > div')
          
           
           await page3.waitForTimeout(3000)
           pages = await browser.pages();
           const page5 = await pages[4]
           await page5.click('#butcboFormaPago')
           await page5.waitForTimeout(3000)
           await page5.click('#grdcboFormaPago_1 > td:nth-child(2)')
           await page5.waitForTimeout(3000)
           await page5.click('#butcboCtaBancaria')
           await page5.waitForTimeout(3000)
           await page5.click('#grdcboCtaBancaria_0 > td:nth-child(4)')
           await page5.waitForTimeout(5000)
           await page5.type('#txttxtImporteCtaBanc', (Math.floor(Math.random() * (max - min)) + min).toString())
        
           await page5.click('#celllblIdx_cmdAceptarIdx_cmdAceptar')
        
           page3 = await pages[3]
           await page3.waitForTimeout(3000)
           await page3.click('#celllblcmdFinalizarKey')
           await page5.waitForTimeout(10000)
    
           await page2.close()
           await browser.close();
        })
        ()
    });

