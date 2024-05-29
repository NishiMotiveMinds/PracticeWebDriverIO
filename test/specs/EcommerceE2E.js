
describe('Ecomm Application Testing', () => {

    it('E2E testing', async () => {
        const Product = ['iphone X','Nokia Edge']
        await browser.url("https://rahulshettyacademy.com/loginpagePractise/")
        await browser.maximizeWindow()
        await $("#username").setValue("rahulshettyacademy")
        await $("#password").setValue("learning")
        await $("#signInBtn").click()
       // await $(".btn-primary").waitForExist()
       const chkoutlink = await $("*=Checkout")
       await chkoutlink.waitForExist() // if link text
        const Cards = await $$("div[class='card h-100']")
        for (let i = 0 ; i< await Cards.length; i++)
            {
              const cardTitle = await Cards[i].$("div h4 a")
              console.log(await cardTitle.getText())
              if (Product.includes(await cardTitle.getText()))
                {
                    await Cards[i].$(".card-footer button").click()
                  
                }

            }

           await  chkoutlink.click()
          const productPrices =  await $$("tr td:nth-child(4) strong")
          //productPrices is in string..have toconvertinto integer : use : ParseInt

        const sumofproductprices = (await Promise.all(await  productPrices.map(async (productPrices) => parseInt((await productPrices.getText()).split(".")[1].trim()))))
         .reduce((acc,price) => acc+price, 0)
         console.log(sumofproductprices)
        const TotalPrices = (await $('h3 strong').getText())
        const TotalintPrice = parseInt(TotalPrices.split(".")[1].trim())
        console.log(TotalintPrice)
        await expect(sumofproductprices).to.equal(TotalintPrice) // chai expect used here
        await $(".btn-success").click()
        await $("#country").setValue("ind")
        await $(".lds-ellipsis").waitForExist({reverse:true})
        await $("=India").click()
        await $("input[type='submit']").click()
        await wdioExpect($(".alert-success ")).toHaveTextContaining("Success")

       


    })


    })
