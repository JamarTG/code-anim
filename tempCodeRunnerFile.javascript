let array2D = [ 
    [0,0,1],
    [1,0,1],
    [0,1,0]
  ]
//1,1,2
const dfs = (g,r,c) => {

    if(r <= 0 || r >= g.length || c <= 0 || c >= g[r].length){
        return 0 
    }


    g[r][c] = 0;

    let btm = 0;
    let top = 0;
    let rgt = 0;
    let lft = 0;
    
    if(g[r+1][c] === 1 && r > g.length-1){
      
        top += dfs(g,r+1,c)
    }
    console.log(r-1)
    if(g[r-1][c] === 1 && r < 0){
        btm += dfs(g,r-1,c)
    }
    if(g[r][c-1] === 1 && c < 0){
        lft += dfs(g,r,c-1)
    }
    if(g[r][c+1] === 1 && c > g[r].length-1){
        rgt += dfs(g,r,c-1)
    }
        
    let s = top + btm + rgt + lft
    console.log(s)
    return s
}

const riverSizes = grid => {
    
    const rSizes = []
    for(let row = 0; row < grid.length; row++){
        for(let col = 0; col < grid[row].length; col++){
            if(grid[row][col] === 1){
                rSizes.push(dfs(grid,row,col))
            }
        }
    }
    console.log(rSizes)
}

riverSizes(array2D)