# QR crawler

## Command to list all the announces

copy(Object.fromEntries(Array.from(Array.from(document.querySelectorAll('.container-fluid a.avatar-item')).reduce((set, l) => set.add(l.href), new Set())).reduce((o, l, i) => o.concat([[i, l]]), [])))

// Num on contact:
document.querySelectorAll('div#hours-content  a[href^=tel]')

