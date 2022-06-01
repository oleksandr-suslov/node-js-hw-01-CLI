
# Получаем и выводим весь список контактов в виде таблицы (console.table)
node index.js --action list
https://monosnap.com/file/D7501odHglw2KQazK9GPpIP4wmjLpO

# Получаем контакт по id
node index.js --action get --id 5
https://monosnap.com/file/HWom3XMDzYEi3Dz6Re8sYrBbtvOdVX

# Добавялем контакт
node index.js --action add --name Mango --email mango@gmail.com --phone 322-22-22
https://monosnap.com/file/tDs1OYg1fG2i3JDFxV6DaHDcy20q4y

# Удаляем контакт
node index.js --action remove --id=3
https://monosnap.com/file/CEFxFOZQ2q7d3kbQqFMADKqez4QlE0