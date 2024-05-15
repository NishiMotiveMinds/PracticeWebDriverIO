describe('UI Controls', () => {

    it('Login Pass Test', async () =>{
        await browser.url('https://rahulshettyacademy.com/loginpagePractise/')
        await $("#username").setValue('rahulshettyacademy')
              //await $("input[name='username']").setValue("Ranjan")
        await $("#password").setValue("learning")
        await $("#signInBtn").click()
        await $(".btn-primary").waitForExist()
         expect.stringContaining("shop")


    })

  
})