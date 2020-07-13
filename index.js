"use strict";

const puppeteer = require("puppeteer");
const readlineSync = require("readline-sync");

console.info("Bem vindo ao robô conversor de câmbio.");

async function robo() {
  const moedaBase = readlineSync.question("Informe a moeda base: ");
  const moedaFinal = readlineSync.question("Informe a moeda final: ");

  const browser = await puppeteer.launch({ headless: true });
  const page = await browser.newPage();

  const url = `https://www.google.com/search?q=${moedaBase}+em+${moedaFinal}&oq=${moedaBase}+em+${moedaFinal}&aqs=chrome..69i57j0l7.2626j1j7&sourceid=chrome&ie=UTF-8`;

  await page.goto(url);

  const resultado = await page.evaluate(
    () => document.querySelector(".a61j6.vk_gy.vk_sh.Hg3mWc").value
  );

  await browser.close();

  console.log(`O valor de 1 ${moedaBase} em ${moedaFinal} é :>> `, resultado);
}

robo();
