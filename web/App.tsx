import { useEffect, useState } from 'react'
import JsonEditor from 'react-json-editor-ui'
import 'react-json-editor-ui/dist/react-json-editor-ui.cjs.development.css'
import { load, save } from '../apis/config'

export const App = () => {
  const [editObject, setEditObject] = useState<any>(null)
  useEffect(() => {
    load().then(setEditObject)
  }, [setEditObject])
  if(!editObject) return <p> loading ... </p>
  return (
    <div style={{ display: 'flex' }}>
      <div style={{ flex: '1' }}>
        <JsonEditor
          data={editObject}
          onChange={data => {
            setEditObject(data)
            if (Object.keys(data).length) save(data)
          }}
        />
      </div>
      <div style={{ flex: '1' }}>
        <pre>
          {JSON.stringify(editObject, null, 2)}
        </pre>
      </div>
    </div>
  )
}