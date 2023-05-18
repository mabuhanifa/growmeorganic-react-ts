import { Box } from '@mui/material';
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import { useSelector } from '../contextAPI/Context';

export default function DataTable() {
    const posts = useSelector(state => state.posts);
    const columns: GridColDef[] = [
        {
            field: "userId",
            headerName: "USER ID",
            width: 20,
            sortable: true,
        },
        {
            field: "id",
            headerName: "ID",
            width: 20,
            sortable: true,
        },
        {
            field: "title",
            headerName: "TITLE",
            width: 300,
            sortable: true,
        },
        {
            field: "body",
            headerName: "Body",
            width: 500,
            sortable: true,
        },

    ]
    return (
        <Box>
            <DataGrid
                columns={columns}
                rows={posts}
                initialState={{
                    pagination: {
                        paginationModel: { page: 0, pageSize: 10 },
                    },
                }}
                pageSizeOptions={[5, 10]}
                checkboxSelection />
        </Box>
    )
}
