import { join } from 'path'
import { readFile, writeFile } from 'fs/promises'
const file = join(process.cwd(), 'config.json')

export const load = async () => {
  try {
    return JSON.parse(await readFile(file, 'utf-8'))
  } catch (e) { }
  return {}
}

export const save = async (cfg: any) => {
  await writeFile(file, JSON.stringify(cfg))
}