// weirdReverse=a=> a.reduce((c, i)=>{c.unshift(i); return c}, [])
// weirdReverse=a=> a.map((x,i)=>a[a.length-++i])
weirdReverse=a=>a.sort(a)

