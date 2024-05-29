describe('Web Broswer Testing', () => {

    xit('Login Fail Test', async () => {
        await browser.url('https://rahulshettyacademy.com/loginpagePractise/')
        console.log(await browser.getTitle())
        await expect(browser).toHaveTitle(expect.stringContaining(' Rahul Shetty Academy'))
        await $("#username").setValue("rahulshettyacademy12345")

        //await $("input[name='username']").setValue("Ranjan")
        await $("#password").setValue("learning")
        await $("#signInBtn").click();
       // await browser.pause(3000)
        console.log(await $(".alert-danger").getText())
        await browser.waitUntil(async()=> await $("#signInBtn").getAttribute('value')==="Sign In"),
        {
            timeout:5000,
            timeoutMsg:'Error message is not showing up'
        }
        console.log(await $(".alert-danger").getText())
         expect($('p').stringContaining("username is rahulshettyacademy and Password is "))
         expect($('p').toHaveHTML("username is  and Password is learning"))


    })

  

  










})