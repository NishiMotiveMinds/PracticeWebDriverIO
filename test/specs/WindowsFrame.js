describe("windowsand frame", async ()=>
    {

xit("child window", async() =>{

await browser.url("https://rahulshettyacademy.com/loginpagePractise/")
await browser.maximizeWindow()
await $(".blinkingText").click()

const totalopenwindow = await browser.getWindowHandles() // this will return in array form //2 window
await browser.switchToWindow(totalopenwindow[1])
console.log(await $("h1").getText())
console.log(await browser.getTitle())
await browser.closeWindow()
await browser.switchToWindow(totalopenwindow[0])
console.log(await browser.getTitle())
//**************************************************** */
await browser.newWindow("https://www.google.co.in/")
console.log(await browser.getTitle())
await browser.closeWindow()
await browser.switchWindow("https://rahulshettyacademy.com/loginpagePractise/")
await $("#username").setValue("Nishi")
await browser.pause(4000)



})

it('Child window inside main window example', async()=>
{
    await browser.url("https://rahulshettyacademy.com/AutomationPractice/")
    await $('#mousehover').scrollIntoView()
   console.log(await $$("a").length)
   await browser.switchToFrame(await $("#courses-iframe"))
   await console.log((await $('=courses')).getTagName())
   console.log(await $$("a").length)

   // switch back to main window
   await browser.switchToFrame(null)
   console.log(await $$("a").length)




})


    })
