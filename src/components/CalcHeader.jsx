function CalcHeader() {
    return (
      <div className="header flex justify-between text-white items-center">
        <h1 className="font-semibold ">Calculator</h1>

        <div className="theme-changer relative flex items-center gap-2">
            <label htmlFor="theme" className="text-xs text-white">THEME</label>
          <input type="range" id="theme" name="theme" list="markers" min={1} max={3} className="appearance-none h-5 w-12 bg-screen rounded-full outline-none py-2"
          />

          <datalist id="markers" className="w-12 flex justify-between absolute right-0 -top-4 text-xs">
            <option value="1" label="1"></option>
            <option value="2" label="2"></option>
            <option value="3" label="3"></option>
            
          </datalist>
        </div>
      </div>
    );
}

export default CalcHeader;