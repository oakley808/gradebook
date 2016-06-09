## Notes
Maintain state in App level component
Make List/ListItems dumb components

App
    Adder input
    - submit
        -> render List
        -> recalculate -> rerender Footer

    List
    - delete
        -> tell parent app to delete and rerender

    - change
        -> tell parent app that grade changed

    Footer (dumb component)
    - render

## Todo
More input validation
Make list sortable
