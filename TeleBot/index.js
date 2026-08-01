import { Telegraf } from "telegraf";
import dotenv from 'dotenv'
dotenv.config()


const mergeSort = `

function mergeSort(arr) {
  if (arr.length <= 1) return [...arr];
  const mid = Math.floor(arr.length / 2);
  const left = mergeSort(arr.slice(0, mid));
  const right = mergeSort(arr.slice(mid));
  const result = [];
  let i = 0;
  let j = 0;
  while (i < left.length && j < right.length) {
    if (left[i] <= right[j]) {
      result.push(left[i++]);
    } else {
      result.push(right[j++]);
    }
  }
  return result.concat(left.slice(i)).concat(right.slice(j));
}

`

const bot  = new Telegraf(process.env.TELE_BOT)

bot.start((ctx)=>ctx.reply("Hey Ask Me Anything"))

bot.command('mergesort',(ctx)=>ctx.reply(mergeSort))
bot.on('sticker',(ctx)=>ctx.reply('777'))
bot.on('text',(ctx)=>ctx.reply('read this'))
bot.launch()