describe('Polestar Dev Testing', () => {
    xit('Accept all cookies testing ', async () => {


        browser.url("https://www.polestar.com/global/developer/get-started/")
        await browser.maximizeWindow()
        await $("div #onetrust-accept-btn-handler").click()
        
    })
    xit('Reject All cookies Testing', async()=>
    {
        browser.url("https://www.polestar.com/global/developer/get-started/")
        await browser.maximizeWindow()
        await $("div #onetrust-reject-all-handler").click()
    })
    xit('click on Return Home button', async()=>
        {
            browser.url("https://www.polestar.com/global/developer/get-started/")
            await browser.maximizeWindow()
            await $("div #onetrust-accept-btn-handler").click()
            const buttons = await $$(".css-1p2wkou")
            await wdioExpect(buttons).toBeElementsArrayOfSize({eq:2})
            console.log(await buttons[0].getText())
            console.log(await buttons[1].getText())
            await buttons[0].click()
            await $(".css-1ltn3n8").waitForExist()
        })
    it('polestar diff version content check', async()=>
        {
            browser.url("https://www.polestar.com/global/developer/get-started/")
            await browser.maximizeWindow()
            await $("div #onetrust-accept-btn-handler").click()
            const buttons = await $$(".css-1p2wkou")
            await wdioExpect(buttons).toBeElementsArrayOfSize({eq:2})
            await buttons[0].click()
            await $(".css-1ltn3n8").waitForExist()
            await $(".css-14zx4vh svg[fill='none']").click() //hamburger click
            await $(".css-11wlsy").waitForExist()
            const Version = await $$(".css-11wlsy") //polestar version display 
            await Version[1].click()
           console.log(await $(".css-13lqyen").getText()) // get text from p3
           wdioExpect($(".css-13lqyen").stringContaining("Yes, it's an SUV. And it drives like a sports car."))
           await $(".css-14zx4vh svg[fill='none']").click() //hamburger click
           await $(".css-11wlsy").waitForExist()
           await Version[2].click()
           console.log(await $(".css-18mfret").getText())
           wdioExpect($(".css-18mfret").stringContaining("Performance SUV. Innovative coupé. Both."))










            
            })







})