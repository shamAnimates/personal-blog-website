import React from 'react';

function NavigationMenu() {
    return (
        <div class="flex flex-row nav-menu p-3">
            <div class="flex basis-3/4">
                <form>
                    <input type='text' className='search-bar ml-5 pl-8 w-80' placeholder='Search articles here'></input>
                    <input type="submit" className='search-button ml-5 px-5' value="Search"></input>
                </form>
            </div>
            <div className='flex basis-1/4 space-x-10'>
                <div class=" hover:scale-105 nav-button"><a href='/'>home</a></div>
                <div class=" hover:scale-105 nav-button"><a href='/contact'>contact</a></div>
                <div class=" hover:scale-105 nav-button"><a href='/portfolio'>Portfolio</a></div>
                <div class=" hover:scale-105 nav-button"><button>☀️</button></div>
            </div>
        </div>
    )
}

export default NavigationMenu;