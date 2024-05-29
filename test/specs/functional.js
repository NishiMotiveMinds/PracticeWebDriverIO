describe("functional testing on App",async ()=>
{
    xit("Scrolling and mouse hovering",async ()=>
    {

     browser.url("https://rahulshettyacademy.com/AutomationPractice/")
    await $("#mousehover").scrollIntoView()
    await $("#mousehover").moveTo()
    await $("=Top").click()
    await browser.pause(4000)
    await browser.url("https://only-testing-blog.blogspot.com/2014/09/selectable.html")
    await $("button").doubleClick()
   // await $("button[ondblclick$='myFunction()']").doubleClick()
    await browser.pause(4000)
    console.log(await browser.isAlertOpen())
    console.log(await browser.getAlertText())
    await browser.pause(4000)

 

    })

    xit("web table sort validation", async ()=>
        {
       await browser.url("https://rahulshettyacademy.com/seleniumPractise/#/offers/")     
       await $("tr th:nth-child(1)").click()
      const veggielocator=  await $$("tr td:nth-child(1)")
      const veggieName = await veggielocator.map(async veggie=>await veggie.getText())
       console.log(veggieName)
      const sortedVeggie = veggieName.sort()
      console.log(sortedVeggie)




        })

    it("web table filter  validation", async ()=>
            {
           await browser.url("https://rahulshettyacademy.com/seleniumPractise/#/offers/")     
           await $("#search-field").setValue("Banana")
           const veggieloc = await $$("tr td:nth-child(1)")
           await expect(veggieloc).toBeElementsArrayOfSize({eq:2})
           console.log(await veggieloc[0].getText())
           await expect(veggieloc[0]).toHaveText("Banana")




    
    
    
    
            })
        
    
    






})