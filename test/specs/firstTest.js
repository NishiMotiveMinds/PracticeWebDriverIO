describe('Web Broswer Testing', () => {

    it('Login Test', async () => {
        await browser.url('https://rahulshettyacademy.com/loginpagePractise/')
        console.log(await browser.getTitle())
        await expect(browser).toHaveTitle(expect.stringContaining(' Rahul Shetty Academy'))
        await $("#username").setValue("rahulshettyacademy")

        //await $("input[name='username']").setValue("Ranjan")
        await $("#password").setValue("learnings")
        await $("#signInBtn").click();
        await browser.pause(3000)
         console.log(await $(".alert-danger").getText())




    })










})