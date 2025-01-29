
export function InputBox({label, sublabel, onChange}) {
    return <div>
      <div className="text-sm font-medium text-left py-2">
        {label}
      </div>
      <input onChange={onChange} placeholder={sublabel} className="w-full px-2 py-1 border rounded border-slate-200" />
    </div>
}