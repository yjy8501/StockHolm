package com.stockholm.main_project.stock.stockdata.dto;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
public class StockMinOutput2 {
    private String stck_cntg_hour;
    private String stck_prpr;
    private String stck_oprc;
    private String stck_hgpr;
    private String stck_lwpr;
}