//const chaiexpect = require('chai').expect

describe('UI Controls test suites', async() => {

    it('UI Test', async () =>{
        await browser.url('https://rahulshettyacademy.com/loginpagePractise/')
        await $("#username").setValue('rahulshettyacademy')
        await $("#password").setValue("learning")
        //const radiobuttons = await $$(".radiotextsty")
        //const userDropdown = radiobuttons[1]
        //await userDropdown.click()
       // await browser.pause(4000)

        const radiobuttons= await $$(".customradio")
        const userdropdown = radiobuttons[1]
        await userdropdown.$("span").click()  // chaninig locator
        //await browser.pause(4000)
        const modal = await $(".modal-body")
        await modal.waitForDisplayed()
        //await $("#cancelBtn").click()
       // console.log(await $$(".customradio")[0].$("span").isSelected())

       // await $("#okayBtn").click()
        //await $$(".customradio")[0].$("Span").click()

        const dropdowns= await $("select.form-control") // select tag
       await  dropdowns.selectByVisibleText("Consultant")
       await dropdowns.selectByAttribute('value','stud')
       await dropdowns.selectByIndex(1)
       //await browser.pause(3000)
       console.log(await dropdowns.getValue())
       chaiexpect(await dropdowns.getValue()).to.equal("teach")

       //chai assertion


        


    })

    it ('dynamic dropdown test', async() => {

      await browser.url("https://rahulshettyacademy.com/AutomationPractice/")
       await $("#autocomplete").setValue("Bah")
       let item = await $$("[class='ui-menu-item'] div")
       console.log(item.length)
      let i= 0
      for (i; i<item.length; i++)
        
        {
      console.log(await item[i].getText())
       if (await item[i].getText() === "Bahamas")
       {
         await Item[i].Click()
         await browser.pause(4000)

       }

        }
    })

    it("checkbox identification", async ()=> {
   const checkbox = await $$("input[type='checkbox']")
  await checkbox[1].click()
   await browser.pause(5000)
   console.log(await checkbox[1].isSelected())
   //to save screenshot 
   await browser.saveScreenshot("screenshot.png")
    })

  
})