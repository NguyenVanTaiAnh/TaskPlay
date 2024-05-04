// @ts-check
const { test, expect } = require('@playwright/test');

test('test', async ({ page }) => {
  await page.goto('https://qldtbeta.phenikaa-uni.edu.vn/congsinhvien/login.aspx');
  await page.getByRole('link', { name: 'Sign in using Microsoft' }).click();
  await page.getByLabel('account@phenikaa-uni.edu.vn').fill('21010666@st.phenikaa-uni.edu.vn');
  await page.getByRole('button', { name: 'Next' }).click();
  await page.getByPlaceholder('Password').click();
  await page.getByPlaceholder('Password').fill('0983419372Hoan.');
  await page.getByRole('button', { name: 'Sign in' }).click();
  await page.getByLabel('Don\'t show this again').check();
  await page.getByRole('button', { name: 'Yes' }).click();
  await page.waitForLoadState('domcontentloaded');// Thời gian timeout là 60 giây
});